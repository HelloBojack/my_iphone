'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  
  
  return (
    <section className='h-screen'>
      <div className='h-5/6'>
        <motion.p
          className='font-semibold text-3xl text-gray-100 opacity-0 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0 }}
        >iPhone 15 Pro</motion.p>

        <div className='h-[380px] overflow-hidden'>
          <video autoPlay muted playsInline>
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
    </section>
  )
}

export default Hero