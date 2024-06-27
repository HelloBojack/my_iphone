'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ModelView from './ModelView'

function Model() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className='bg-zinc py-[2rem]'>
      <div className="pt-[2rem] px-[4rem] flex justify-between items-center">
        <motion.h1
          ref={ref}
          className="text-[56px] font-bold text-gray mb-[1rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', duration: 2 }}
        >Take a closer look.</motion.h1>
      </div>

      <div>
        <ModelView />
      </div>
    </section>
  )
}

export default Model