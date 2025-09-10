import React from "react";
import Line1 from "../assets/images/Line1.png";
import Group from "../assets/icons/Group.png";
import Group1 from "../assets/icons/Group1.png";
import Group2 from "../assets/icons/Group2.png";
import Lineshadowleft from "../assets/icons/Lineshadowleft.png";
import Lineshadowright from "../assets/icons/Lineshadowright.png";
import Lineshape from "../assets/icons/Lineshape.png";
import Lineshape1 from "../assets/icons/Lineshape1.png";
import Noone from "../assets/icons/Noone.png";
import Notwo from "../assets/icons/Notwo.png";
import Nothree from "../assets/icons/Nothree.png";

const Works = () => {
  return (
    <div
      id="works"
      className="Works-comp overflow-hidden relative z-[-2px] lg:h-[1200px] bg-white"
    >
      {/* Background Decorative Elements */}
      <img
        src={Lineshape}
        alt=""
        className="absolute top-0 left-0 hidden lg:block"
      />
      <img
        src={Lineshape1}
        alt=""
        className="absolute bottom-0 right-0 hidden lg:block"
      />
      <img
        src={Lineshadowright}
        alt=""
        className="hidden lg:block   w-[706px] h-[647px] opacity-[37%]  rounded-full absolute top-0 right-0 z-0
         pointer-events-none select-none"
      />
      <img
        src={Lineshadowleft}
        alt=""
        className="hidden lg:block  w-[1226px] h-[637px] opacity-[37%] rounded-full 
        absolute bottom-0 -left-[533px] z-0 pointer-events-none select-none"
      />

      {/* Content Section */}
      <div className="relative  z-10 pb-6 pt-20 px-4 sm:px-10">
        <h2
          className=" text-[20px]  lg:text-[46px] lg:leading-[46px] tracking-[0%] sm:text-4xl font-bold
         text-center sm:mb-4 text-black mb-1"
        >
          How PUBBLI Works
        </h2>
        <p
          className="font-normal text-[16px]  lg:text-[20px] 
        lg:leading-[28px] tracking-[0%] text-center text-black
         md:mb-14 max-w-2xl mx-auto mb-6 "
        >
          Streamline your campaign journey in three simple steps.
        </p>

        {/* Curved Line and Steps */}
        <div className="linewidth relative  w-full  mx-auto">
          <img
            src={Line1}
            alt="curve"
            className=" hidden lg:block  h-[840px] w-full object-contain absolute 
            top-0 left-0 z-0"
          />

          {/* Step 01 */}
          <div
            className="lg:absolute firstquery max-w-[360px] z-10 md:w-[593px]  flex flex-col justify-center md:max-w-none
          md:flex-row-reverse items-center bg-white rounded-[26px] shadow-md px-6 py-6 mx-auto lg:mx-0"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:ml-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src={Group} alt="step 1" className="w-[123px]" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-bold mb-2 text-black">
                Create Your Campaign
              </h3>
              <p className="text-[16px] font-normal text-black leading-[100%] tracking-[0%]">
                Define goals, audience, and deadlines using our step-by-step
                wizard.
              </p>
            </div>
          </div>

          {/* Step 01 Number */}
          <div
            className="hidden lg:block firstno absolute z-20 bg-white h-[50px]
           w-[50px] rounded-full shadow-md"
          >
            <img
              src={Noone}
              alt="1"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2
               -translate-y-1/2"
            />
          </div>

          {/* Step 02 */}
          <div
            className=" secondquery md:max-w-none  lg:absolute  
           z-10 max-w-[360px] md:w-[593px] flex flex-col md:flex-row items-center bg-white
            rounded-[26px] shadow-md px-6 py-6 mx-auto lg:mx-0 mt-5"
          >
            <div className="flex-1">
              <h3 className="text-[18px] font-bold mb-2 text-black">
                Collaborate with Influencers
              </h3>
              <p className="text-[16px] font-normal text-black leading-[100%] tracking-[0%]">
                Find influencers and manage submissions seamlessly.
              </p>
            </div>
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:ml-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src={Group1} alt="step 2" className="w-[123px]" />
              </div>
            </div>
          </div>

          {/* Step 02 Number */}
          <div className="hidden lg:block secondno  lg:absolute   z-20 bg-white h-[50px] w-[50px] rounded-full shadow-md">
            <img
              src={Notwo}
              alt="2"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Step 03 */}
          <div
            className="thirdquery  lg:absolute z-10 md:max-w-none max-w-[360px]  md:w-[593px] flex flex-col 
          md:flex-row-reverse items-center bg-white rounded-[26px] 
          shadow-md px-6 py-6 mx-auto lg:mx-0 mt-5"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:ml-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <img src={Group2} alt="step 3" className="w-[123px] " />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-[18px] font-bold mb-2 text-black">
                Analyze Results
              </h3>
              <p className="text-[16px] font-normal text-black leading-[100%] tracking-[0%]">
                Track performance and refine campaigns with analytics.
              </p>
            </div>
          </div>

          {/* Step 03 Number */}
          <div className="thirdno hidden lg:block  absolute z-20 bg-white h-[50px] w-[50px] rounded-full shadow-md">
            <img
              src={Nothree}
              alt="3"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
