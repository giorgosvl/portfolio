import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen">
      <div className="container">
        <Header />
        <Projects githubUser="giorgosvl" />
        <Contact />
      </div>
    </div>
  )
}
