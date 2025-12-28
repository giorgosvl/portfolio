import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  // Δημιουργούμε χειροκίνητα τα projects που θέλουμε να εμφανίζονται
  const projects = [
    {
      title: "AI Link Predictor",
      description: "Predicting links in a citation network using GCN and embeddings.",
      tech: ["Python", "PyTorch", "NetworkX", "GCN", "Text Embeddings", "Deep Learning"],
      repo: "https://github.com/giorgosvl/LinkPredictionLLM",
      image: "/portfolio/ai-link-predictor.jpg"
    },
    {
      title: "8-Puzzle Solver",
      description: "A program that solves the 8-puzzle problem using Java algorithms.",
      tech: ["Java"],
      repo: "https://github.com/giorgosvl/8-puzzle-solver",
      image: "/portfolio/8-puzzle-solver.jpg"
    },
    {
      title: "socialbookstore",
      description: "A social bookstore application for sharing and discovering books.",
      tech: ["Java", "Spring Boot", "MySQL", "Bootstrap", "CSS"],
      repo: "https://github.com/giorgosvl/socialbookstore",
      image: "/portfolio/bookstore.jpg"
    }

  ]

  return (
    <section id="projects" className="mb-32 scroll-mt-20">
      <motion.h2 
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((proj, index) => {
          const gradientClasses = [
            'card card-gradient-1',
            'card card-gradient-2',
            'card card-gradient-3'
          ];
          return (
          <motion.div 
            key={index}
            className={`${gradientClasses[index % 3]} flex flex-col`}
            initial={{opacity:0, y:20, scale: 0.9}}
            animate={{opacity:1, y:0, scale: 1}}
            transition={{duration:0.4, delay: index * 0.1}}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.img 
              src={proj.image} 
              alt={proj.title} 
              className="mb-2 rounded" 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="font-semibold">{proj.title}</h3>
            <p className="small mt-2">{proj.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 flex justify-center">
              <motion.a
                href={proj.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium border-2 border-blue-400 hover:border-blue-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  )
}

