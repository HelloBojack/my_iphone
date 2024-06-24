/* eslint-disable @next/next/no-img-element */
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from "react";
import VideoCarousel from './VideoCarousel'
const HightLight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <section className='bg-zinc'>
      <div className="pt-[5rem] px-[4rem] flex justify-between items-center">
        <motion.h1
          ref={ref}
          className="text-[56px] font-bold text-gray mb-[1rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', duration: 2 }}
        >Get the highlights.</motion.h1>
        <div className='flex justify-center items-center'>
          <motion.p
            className='text-blue mr-[1rem] hover:underline text-[22px] flex justify-center items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', duration: 2, delay: isInView ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <span>Watch the film</span>
            <img src="/assets/images/watch.svg" className='ml-2' alt="watch" />
          </motion.p>
          <motion.p
            className='text-blue hover:underline text-[22px] flex justify-center items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', duration: 2, delay: isInView ? 2 : 0 }}
            exit={{ opacity: 0 }}
          >
            <span>Watch the event</span>
            <img src="/assets/images/right.svg" className='ml-2' alt="right" />
          </motion.p>
        </div>
      </div>

      <VideoCarousel />
    </section>
  )
}

export default HightLight
