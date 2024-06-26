/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react'
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
    videoDuration: 5,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: '/assets/videos/highlight-sec.mp4',
    videoDuration: 6,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: '/assets/videos/highlight-third.mp4',
    videoDuration: 5,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: '/assets/videos/highlight-fourth.mp4',
    videoDuration: 5,
  },
];

function VideoCarousel() {
  const videoRef = useRef([]);
  const [videoWrapperRef, animate] = useAnimate()
  const [videoInfo, setVideoInfo] = useState({
    videoIndex: 0,
    isPlaying: false,
    isEnd: false
  })

  const { isEnd, isPlaying, videoIndex } = videoInfo

  const handleOnEnded = async (index) => {
    if (!isPlaying) return
    if (index === 3) {
      setVideoInfo(pre => ({ ...pre, isEnd: true, isPlaying: false }))
      return
    }
    await animate(videoWrapperRef.current, { x: `${-((index + 1) * 100)}%` }, { duration: 1, delay: index === 1 ? 2 : 0 })
    videoRef.current[index + 1].play()
  }

  const handleButtonClick = () => {
    if (isEnd) {
      setVideoInfo(pre => ({ ...pre, videoIndex: 0, isPlaying: true, isEnd: false }))
      animate(videoWrapperRef.current, { x: 0 })
      videoRef.current[0].play()
    }
    else if (isPlaying) {
      setVideoInfo(pre => ({ ...pre, isPlaying: false }))
      videoRef.current[videoIndex].pause()
    } else {
      setVideoInfo(pre => ({ ...pre, isPlaying: true }))
      videoRef.current[videoIndex].play()
    }
  }

  const handleOnPlay = (index) => {
    setVideoInfo(pre => ({ ...pre, videoIndex: index, isPlaying: true }))
  }

  const handleDotClick = (index) => {
    videoRef.current[videoIndex].pause()
    setVideoInfo(pre => ({ ...pre, videoIndex: index, isPlaying: true, isEnd: false }))
    animate(videoWrapperRef.current, { x: `${-(index * 100)}%` }, { duration: 1, delay: index === 1 ? 2 : 0 })
    videoRef.current[index].play()
  }

  return (
    <section className='flex relative'>
      <motion.div
        ref={videoWrapperRef}
        className='flex'
      >
        {highlightsSlides.map((item, index) => {
          return <div
            key={item.id}
            className='w-full flex-shrink-0 flex justify-center items-center'>
            <div className='relative w-[90%] h-full rounded-[5%] overflow-hidden bg-black flex justify-center items-center'>
              <video
                ref={(el) => (videoRef.current[index] = el)}
                playsInline muted autoPlay
                className='rounded-sm'
                onEnded={() => handleOnEnded(index)}
                onPlay={() => handleOnPlay(index)}
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
        className='absolute bottom-5 left-[50%] flex justify-center items-center'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.div
          className='rounded-full bg-gray-100 flex min-w-[160px] h-[40px] px-[1rem] ml-[-80px] justify-center items-center'
        >
          {highlightsSlides.map((item, index) => {
            return <motion.div
              key={item.id}
              className='w-[8px] h-[8px] rounded-full bg-gray-200 mx-[8px]'
              animate={videoIndex === index && !isEnd ? { width: 100 } : { width: 8 }}
              onClick={() => handleDotClick(index)}
            >
              <motion.div
                className='dot w-[0] h-[8px] rounded-full bg-gray-300'
                animate={videoIndex === index && !isEnd ? { width: 100 } : { width: 0 }}
                transition={{ duration: videoIndex === index && !isEnd ? item.videoDuration : 0 }}
              ></motion.div>
            </motion.div>
          })}
        </motion.div>
        <button
          className='w-[40px] h-[40px] rounded-full bg-gray-200 ml-[1rem] flex justify-center items-center'
          onClick={handleButtonClick}>
          <img
            src={isEnd ? '/assets/images/replay.svg' : !isPlaying ? '/assets/images/play.svg' : '/assets/images/pause.svg'}
            alt={isEnd ? "replay" : !isPlaying ? "play" : "pause"}
          />
        </button>
      </motion.div>
    </section>
  )
}

export default VideoCarousel