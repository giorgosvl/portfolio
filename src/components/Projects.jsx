import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  // Δημιουργούμε χειροκίνητα τα projects που θέλουμε να εμφανίζονται
  const projects = [
    {
      title: "AI Link Predictor",
      description: "Predicting links in a citation network using GCN and embeddings.",
      tech: ["Python", "PyTorch", "NetworkX"],
      repo: "https://github.com/giorgosvl/LinkPredictionLLM",
      image: "/portfolio/ai-link-predictor.jpg"
    }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, index) => (
          <motion.a 
            key={index}
            href={proj.repo}
            target="_blank"
            rel="noreferrer"
            className="card"
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.35}}
          >
            <img src={proj.image} alt={proj.title} className="mb-2 rounded" />
            <h3 className="font-semibold">{proj.title}</h3>
            <p className="small mt-2">{proj.description}</p>
            <div className="mt-3 small">
              {proj.tech.map((t, i) => <span key={i} className="mr-2">{t}</span>)}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

