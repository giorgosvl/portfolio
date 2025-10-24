import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'

export default function Projects({ githubUser = 'giorgosvl' }){
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos(){
      try{
        const res = await fetch(`https://api.github.com/users/${githubUser}/repos?per_page=100&sort=updated`)
        const data = await res.json()
        if(Array.isArray(data)){
          // take top 6 repos excluding forks
          const filtered = data.filter(r => !r.fork).slice(0,6)
          setRepos(filtered)
        } else {
          setRepos([])
        }
      }catch(e){
        console.error(e)
        setRepos([])
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [githubUser])

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading && <div className="card">Loading projects...</div>}
        {!loading && repos.length===0 && <div className="card">No projects found. Make sure your GitHub username is correct and repos are public.</div>}
        {repos.map(repo => (
          <motion.a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="card"
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.35}}
          >
            <h3 className="font-semibold">{repo.name}</h3>
            <p className="small mt-2">{repo.description || 'No description'}</p>
            <div className="mt-3 small">
              <span>★ {repo.stargazers_count}</span>
              <span className="ml-3">Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
