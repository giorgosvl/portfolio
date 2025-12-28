import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "Python", "C", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["React", "HTML", "CSS", "Spring Boot"]
    },
    {
      title: "Technologies",
      skills: ["PyTorch", "NetworkX", "Git", "GCN", "Link Prediction"]
    },
    {
      title: "AI/ML",
      skills: ["Graph Neural Networks", "Text Embeddings", "Network Analysis", "Deep Learning"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQLite"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Quick Learner", "Attention to Detail"]
    }
  ]

  return (
    <section id="skills" className="mb-32 scroll-mt-20">
      <motion.h2 
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`card ${index % 3 === 0 ? 'card-gradient-1' : index % 3 === 1 ? 'card-gradient-2' : 'card-gradient-3'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-300">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    background: 'rgba(59,130,246,0.2)',
                    border: '1px solid rgba(59,130,246,0.4)',
                    color: '#93c5fd'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

