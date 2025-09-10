import React from 'react';
import Marqueeicon from '../assets/icons/Marqueeicon.png';

const Marquee = () => {
  const items = [
    { label: 'EDUCATION', color: 'bg-yellow-400' },
    { label: 'COMMUNICATION', color: 'bg-green-400' },
    { label: 'MEETINGS', color: 'bg-red-400' },
    { label: 'DISCUSSION', color: 'bg-blue-400' },
    { label: 'FUN', color: 'bg-pink-400' },
    { label: 'LEADERSHIP', color: 'bg-purple-400' },
    { label: 'COLLABORATION', color: 'bg-orange-400' },
  ];

  const iconItems = [
    [Marqueeicon, 'Learn Together'],
    [Marqueeicon, 'Connect Globally'],
    [Marqueeicon, 'Build Networks'],
    [Marqueeicon, 'Innovate Daily'],
    [Marqueeicon, 'Achieve Goals'],
    [Marqueeicon, 'Excellence First'],
    [Marqueeicon, 'Inspire Others'],
  ];

  return (
    <div className="relative mb-[-30px] w-full h-40 overflow-hidden z-10">
      {/* Top Marquee */}
      <div className=" topmarquee absolute top-1/2 left-0 w-[200%]
      xl:-translate-y-[-50%] xl:rotate-[1.4deg]
      lg:-translate-y-[-50%] lg:rotate-[2.7deg]

       2xl:-translate-y-[-50%] 2xl:rotate-[1.4deg]">
        <div className="h-[49px] py-4 px-2 bg-blue-200 whitespace-nowrap flex items-center
         animate-marquee-smooth">
          <div className="text-[17px] gap-[10px] leading-[100%] tracking-[1.5px] uppercase flex items-center space-x-8
           text-[#3579F6] font-medium text-base sm:text-[17px] px-4">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="flex items-center space-x-2">
                <img src={Marqueeicon} alt="icon" className="w-4 h-4 object-contain" />
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="bottommarquee  absolute top-1/2 left-0 w-[200%]  
      xl:translate-y-[-50%] xl:-rotate-[2.3deg]
      lg:translate-y-[-50%] lg:-rotate-[2.6deg]
      translate-y-[-100%] -rotate-[deg]

      2xl:translate-y-[-50%] 2xl:-rotate-[1.4deg]">
        <div className="h-[49px] py-4 px-2 z-11 bg-blue-200 whitespace-nowrap flex items-center 
        animate-marquee-smooth-reverse">
          <div className="text-[17px] leading-[100%] tracking-[1.5px] uppercase flex
          font-normal items-center space-x-8 text-[#3579F6] text-base sm:text-[17px] px-4">
            {[...iconItems, ...iconItems].map(([imgSrc, label], i) => (
              <span key={i} className="flex items-center space-x-2 font-normal">
                <img src={imgSrc} alt={label} className="w-5 h-5 object-contain" />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;