import React from 'react'
import { motion, useAnimate } from 'framer-motion'

const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: '/assets/videos/highlight-first.mp4',
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: '/assets/videos/highlight-sec.mp4',
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: '/assets/videos/highlight-third.mp4',
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: '/assets/videos/highlight-fourth.mp4',
    videoDuration: 3.63,
  },
];

function VideoCarousel() {
  const [scope, animate] = useAnimate()

  const handleOnEnded = (index) => {
    if (index === 3) return
    animate(scope.current, { x: `${-((index + 1) * 100)}%` }, { duration: 1, delay: index === 1 ? 2 : 0 })
  }

  return (
    <section className='flex relative'>
      <motion.div
        ref={scope}
        className='flex'
      >
        {highlightsSlides.map((item, index) => {
          return <div key={item.id} className='w-full flex-shrink-0 flex justify-center items-center'>
            <div className='relative w-[90%] h-full rounded-[5%] overflow-hidden bg-black flex justify-center items-center'>
              <video
                playsInline muted autoPlay
                className='rounded-sm'
                onEnded={() => handleOnEnded(index)}
              >
                <source src={item.video} />
              </video>

              <div className='absolute top-10 left-10 font-bold text-[22px]'>
                {item.textLists.map((text) => {
                  return <p key={text} >
                    {text}
                  </p>
                })}
              </div>
            </div>
          </div>
        })}
      </motion.div>

      <motion.div
        className='absolute bottom-1 left-[50%] flex justify-center items-center'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring' }}>
        <motion.div
          className='rounded-full bg-gray-200 flex w-[160px] h-[40px] ml-[-80px] justify-center items-center'
        >
          {highlightsSlides.map((item) => {
            return <div key={item.id} className='w-[8px] h-[8px] rounded-full bg-gray-100 mx-[8px]'></div>
          })}
        </motion.div>
        <div className='w-[40px] h-[40px] rounded-full bg-gray-200 ml-[1rem]'>
          <div></div>
        </div>
      </motion.div>
    </section>
  )
}

export default VideoCarousel