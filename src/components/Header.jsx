import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <header id="home" className="min-h-screen flex flex-col justify-center mb-12">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <motion.div 
          style={{
            width: 200, 
            height: 200, 
            borderRadius: 24, 
            background: 'linear-gradient(135deg,#3b82f6,#2563eb)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 12px 40px rgba(59,130,246,0.4)',
            padding: '4px'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}me.jpeg`} 
            alt="George Vletsas" 
            style={{
              width: '100%',
              height: '100%', 
              borderRadius: '20px', 
              objectFit: 'cover',
              imageRendering: 'auto'
            }}
            loading="eager"
            decoding="async"
            className="select-none"
          />
        </motion.div>
        
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent break-words" style={{ lineHeight: '1.3', paddingBottom: '0.15em', overflow: 'visible' }}>
            George Vletsas
          </h1>
          <p className="text-xl text-gray-300 mb-2">student · developer · AI engineering</p>
          <p className="text-lg text-gray-400 mb-4">Ioannina, Greece</p>
        </motion.div>
      </div>

      {/* Bio Section */}
      <motion.div 
        className="card card-gradient-1 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-lg leading-relaxed">
          Hi! I'm a <span className="text-blue-400 font-semibold">Computer Science Engineering</span> student. 
          I love <span className="text-blue-300 font-semibold">coding</span>, 
          <span className="text-blue-500 font-semibold"> AI engineering</span>, 
          exploring new technologies, and turning ideas into real projects.
        </p>
      </motion.div>

      {/* Navigation Menu */}
      <nav className="mt-8 flex gap-3 flex-wrap justify-center">
        <motion.a 
          href="#resume" 
          className="nav-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <span>Resume</span>
        </motion.a>
        <motion.a 
          href="#skills" 
          className="nav-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          <span>Skills</span>
        </motion.a>
        <motion.a 
          href="#projects" 
          className="nav-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <span>Projects</span>
        </motion.a>
        <motion.a 
          href="#contact" 
          className="nav-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.75 }}
        >
          <span>Contact</span>
        </motion.a>
      </nav>

      {/* Scroll Indicator */}
      <motion.div 
        className="mt-12 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" stroke="white" />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  )
}
