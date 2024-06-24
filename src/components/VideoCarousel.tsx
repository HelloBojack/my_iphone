import React from 'react'

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
  return (
    <section className='flex overflow-x-scroll'>
      {highlightsSlides.map(item => {
        return <div key={item.id} className='w-full flex-shrink-0 flex justify-center items-center'>
          <div className='relative w-[90%] h-full rounded-lg overflow-hidden bg-black flex justify-center items-center'>
            <video playsInline muted autoPlay className='rounded-sm'>
              <source src={item.video} />
            </video>

            <div className='absolute top-5 left-5 font-bold text-[22px]'>
              {item.textLists.map((text) => {
                return <p key={text} >
                  {text}
                </p>
              })}
            </div>
          </div>
        </div>
      })}
    </section>
  )
}

export default VideoCarousel