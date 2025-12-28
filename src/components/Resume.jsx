import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <section id="resume" className="mb-32 scroll-mt-20">
      <motion.h2 
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education */}
        <motion.div
          className="card card-gradient-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">Computer Science Engineering</h4>
              <p className="small">Student</p>
              <p className="small mt-1">Focus on AI engineering, software development, and data science</p>
            </div>
          </div>
        </motion.div>

        {/*{/* Experience 
        <motion.div
          className="card card-gradient-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Experience</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white">Developer</h4>
              <p className="small">Building projects and exploring new technologies</p>
              
            </div>
          </div>
        </motion.div>
        */}

        {/* Languages */}
        <motion.div
          className="card card-gradient-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Languages</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white">Greek</span>
              <span className="small text-blue-300">Native</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white">English</span>
              <span className="small text-blue-300">Proficiency</span>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="card card-gradient-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["AI Engineering", "Machine Learning", "Web Development", "Problem Solving"].map((interest, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm"
                style={{
                  background: 'rgba(59,130,246,0.2)',
                  border: '1px solid rgba(59,130,246,0.4)',
                  color: '#93c5fd'
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

