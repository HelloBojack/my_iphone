'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 760)

  const handleResize = () => {
    const newWidth = window.innerWidth;
    if (newWidth <= 760) {
      setIsSmall(true);
    } else if (newWidth > 760) {
      setIsSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmall]);

  return (
    <section className='h-screen'>
      <div className='h-5/6 flex flex-col justify-center items-center'>
        <motion.p
          className='font-semibold text-3xl text-gray-100 opacity-0 text-center my-[2rem] md:mt-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          iPhone 15 Pro
        </motion.p>

        <div className='md:h-[380px] overflow-hidden h-[682px]'>
          {isSmall &&
            <video autoPlay muted playsInline className='h-full'>
              <source src="/assets/videos/smallHero.mp4" type="video/mp4" />
            </video>}
          {!isSmall && <video autoPlay muted playsInline className='h-full'>
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>}
        </div>

        <div className='flex justify-center items-center flex-col my-[2rem] sm:mt-[2rem] lg:mt-[4rem]'>
          <motion.button
            className='bg-blue w-[70px] h-[45px] rounded-full'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            exit={{ opacity: 0 }}
          >Buy</motion.button>
          <motion.p
            className='mt-[2rem] text-[22px]'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            exit={{ opacity: 0 }}
          >From $999 or $41.62/mo. for 24 mo.1</motion.p>
        </div>
      </div>

    </section>
  )
}

export default Hero