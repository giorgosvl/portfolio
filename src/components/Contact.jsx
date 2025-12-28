import React from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  return (
    <section id="contact" className="mb-32 scroll-mt-20">
      <motion.h2 
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          className="card card-gradient-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-medium mb-2">Email</h4>
          <p className="small">giorgosvletsas@gmail.com</p>
        </motion.div>
        <motion.div 
          className="card card-gradient-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <h4 className="font-medium mb-2">Profiles</h4>
          <p className="small">
            <a className="link" href="https://github.com/giorgosvl" target="_blank" rel="noreferrer">
              GitHub: giorgosvl
            </a>
          </p>
          <p className="small mt-2">
            <a className="link" href="https://www.linkedin.com/in/George Vletsas" target="_blank" rel="noreferrer">
              LinkedIn: George Vletsas
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
