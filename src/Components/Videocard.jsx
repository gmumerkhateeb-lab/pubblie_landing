import React from 'react';
import { FaStar } from 'react-icons/fa';
import Video from '../assets/Videos/Video.mp4';
import Topmessage from '../assets/icons/Topmessage.png'
import Bottommessage from '../assets/icons/Bottommessage.png'

const cards = [
  {
    name: 'Andrew Tate',
    video: Video,
    message: 'Track performance & refine campaigns with analytics',
  },
  {
    name: 'Jimmy Johns',
    video: Video,
    message: 'Boost your outreach with real-time metrics',
  },
  {
    name: 'Palo Tate',
    video: Video,
    message: 'Collaborate and scale effortlessly',
  },
  {
    name: 'Roma Peol',
    video: Video,
    message: 'Streamline your strategy for better results',
  },
  {
    name: 'Salena Gomiz',
    video: Video,
    message: 'Optimize engagement with smart tools',
  },
  {
    name: 'Marques Loffy',
    video: Video,
    message: 'Reach new audiences with ease',
  },
];

const Videocard = () => {
  return (
    <section id='videocard' className="video-card-comp md:py-20 sm:py-7 pb-1 pt-6
     px-4 bg-white text-center ">
      <div className="mb-10 mx-auto max-w-3xl px-4">
        <h4 className="text-[12px] sm:text-[14px] md:text-[18px]  font-bold 
        leading-[1.2] tracking-[0%] text-black mb-2">What Our Users Say</h4>
        <h2 className="text-[15px]  sm:text-[24px] md:text-[28px] lg:text-[32px]  
        font-bold leading-[1.2] tracking-[0%] text-black">
          See How PUBBLI Transforms Campaigns
        </h2>
      </div>
<img src={Topmessage} alt="" className='hidden lg:block mx-[22%]' />
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4
       xl:grid-cols-6 2xl:grid-cols-7 px-4 lg:px-8
      justify-center max-w-7.5xl mx-auto gap-3 ">
        {cards.map((card, i) => (
          <div key={i} className="2xl:h-[292px] 2xl:w-[260px] h-[292px] 
          w-[210px] bg-white shadow-md rounded-xl p-3 
          mx-auto">
            <div className="w-full h-[150px] mb-3 relative">
              {/* Time badge */}
              <span className="absolute top-2 right-2 bg-[#00000080] bg-opacity-60
               text-white text-[12px] px-2 w-[40px] h-[20px] py-[2px] rounded-full z-10">
                0:6
              </span>
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-t-lg w-full h-full object-cover"
              />
            </div>

            <div className="text-left px-1">
              <h3 className="text-[16px] leading-[16px] tracking-[0%] font-bold text-black"
              >{card.name}</h3>
              <div className="flex gap-1 text-yellow-500 text-sm my-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="text-[14px] leading-[18px] tracking-[0%] font-medium
               text-black">"{card.message}"</p>
            </div>
          </div>
        ))}
      </div>
      <img src={Bottommessage} alt="" className='hidden lg:block mx-[60%] pt-4' />

{/* button */}
<div className="leading-[20px] md:mt-25 mt-10">
  <p className='font-normal text-[16px] leading-[100%] tracking-[0%]'>
    Join thousands of satisfied users revolutionizing their campaigns with PUBBLI, the
    <br /> platform for seamless collaboration and measurable success.
  </p>
  <div className="mx-auto text-center mt-4 lg:mt-6">
    <button className="border border-blue-500 w-[180px] sm:w-[218px] h-[48px] sm:h-[61px] text-[14px] sm:text-[16px] bg-white text-blue-600 hover:bg-blue-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center">
      <svg
        className="w-10 h-8 sm:w-15 sm:h-12 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="1" strokeWidth={2} />
      </svg>
      <span className='font-medium w-35 py-[20px] px-[8px] text-[14px] sm:text-[16px] leading-[100%] tracking-[0%] text-[#3579F6] hover:text-white'>
        Join Us Now
      </span>
    </button>
  </div>
</div>

    </section>
  );
};

export default Videocard
