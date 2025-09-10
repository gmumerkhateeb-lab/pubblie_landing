import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Element1 from "../assets/images/Element1.png";
import Element2 from "../assets/images/Element2.png";
import Element3 from "../assets/images/Element3.png";
import Element4 from "../assets/images/Element4.png";
import Element5 from "../assets/images/Element5.png";
import Element6 from "../assets/images/Element6.png";
import Element7 from "../assets/images/Element7.png";
import up from "../assets/images/Up.png";
import down from "../assets/images/Down.png";
import Font2 from "../assets/Fonts/Font2.png";
import Font3 from "../assets/Fonts/Font3.png";
import Font4 from "../assets/Fonts/Font4.png";
import Font5 from "../assets/Fonts/Font5.png";
import Font6 from "../assets/Fonts/Font6.png";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import Heroshadow from "../assets/images/Heroshadow.png";
import Herotop from "../assets/images/Herotop.png";
import Herobottom from "../assets/images/Herobottom.png";
import Button from "./Button.jsx";

const slides = [
  Element1,
  Element2,
  Element3,
  Element4,
  Element5,
  Element6,
  Element7,
];

const Hero = () => {
  return (
    <div className="hero-comp relative overflow-hidden ">
      <img
        src={Herotop}
        alt="shadow"
        className="absolute z-10 top-[-110px] right-0 max-w-[300px] 
         hidden min-md:block"
      />

      <img
        src={Heroshadow}
        alt="shadow"
        className="z-10 mx-auto h-[123px] w-full absolute top-0  
        sm:h-[150px] opacity-[68%] hidden sm:block"
      />
      <div
        className=" relative w-full gap-[123px] text-center bg-gradient-to-r from-white
       to-white font-inter"
      >
        <img
          src={Herobottom}
          alt=""
          className="rotate-10 absolute left-[-70px] bottom-[10px] w-[175px]  hidden min-md:block"
        />
        {/* Heading */}
        <h1
          className=" sm:mt-[4px] text-[30px] leading-8 md:mt-15 md:text-[40px] md:leading-[60px] lg:mt-20 xl:mt-20 relative z-20 2l:text-[54px] 
        font-bold text-gray-900 mb-1 tracking-[0.02em] 2xl:leading-[62px] mt-3 "
        >
          Transform Your Campaigns <br />
          with
          <span
            className="text-[#3B82F6] 
          mx-5"
          >
            Pubblie
          </span>
        </h1>

        {/* Image slider: 4 slides, angled, center-aligned */}
        <div
          className="relative mt-20 
           "
        >
          <img
            src={up}
            alt=""
            className="w-full custom-mt1  2xl:mt-[-111px]  mt-[-60px] z-10 absolute hidden
              min-[1040px]:block"
          />

          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // Mobile first approach - smaller screens first
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="-mt-12 mb-12"
          >
            {slides.map((img, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  className="
        w-full aspect-square mx-auto
        max-w-[250px] sm:max-w-[280px] md:max-w-[320px] 
        lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px]
      "
                >
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            src={down}
            alt=""
            className="w-full xlg:mx-auto 3xl:max-w-[2300px] 
    custom-mt lg:mt-[-120px]
    -mb-[230px] 2xl:mt-[-180px] z-10 absolute  hidden
              min-[1040px]:block  "
          />
        </div>

        {/* Description */}
        <p
          className="font-inter -top-6.5 font-normal not-italic text-[18px] text-center 
        align-middle leading-[26px] tracking-normal relative z-10 text-[#757575]"
        >
          Connecting Advertisers and Influencers for Seamless Campaign Success.
        </p>

        {/* Button */}
        <Button />

        {/* Sponsers */}
        <div className=" mt-7 md:mt-10  lg:mt-20 md:mb-[50px] lg:mb-[80px] ">
          <div
            className="flex flex-wrap justify-center gap-5  md:gap-5 lg:gap-5 
            xl:justify-between text-center "
          >
            {/* Text Block - behaves like 1 grid item on mobile, spans on larger */}
            <div className="lg:w-[200px] text-center sm:col-span-3 md:col-span-2 lg:col-span-2">
              <span
                className="text-[12px] sm:text-[20px] font-semibold 
      2xl:leading-[22px] sm:leading-[-10px]  text-[#151516] tracking-[-0.11] "
              >
                22.000+ <br />
                <span className="text-[12px] sm:text-[14px] text-[#4D4D51]">
                  happy clients
                </span>
              </span>
            </div>

            {/* Logos */}
            <div className="w-auto text-center lg:w-[190px]">
              <img
                src={Font2}
                alt="Font2"
                className="h-[30px] 
                sm:h-[50px] lg:h-[60px] w-auto text-center object-cover"
              />
            </div>

            <div className="w-auto text-center lg:w-[190px]">
              <img
                src={Font3}
                className="h-[30px] sm:h-[50px] lg:h-[60px] w-auto text-center object-cover"
                alt="Font3"
              />
            </div>
            <div className="w-auto text-center lg:w-[190px]">
              <img
                src={Font4}
                className="h-[30px] sm:h-[50px] lg:h-[60px] w-auto text-center object-cover"
                alt="Font4"
              />
            </div>
            <div className="w-auto lg:w-[190px]">
              <img
                src={Font5}
                className="h-[30px] sm:h-[50px] lg:h-[60px] w-auto object-cover"
                alt="Font5"
              />
            </div>
            <div className="w-auto lg:w-[190px]">
              <img
                src={Font6}
                className="h-[30px] sm:h-[50px] lg:h-[60px] w-auto object-cover"
                alt="Font6"
              />
            </div>
          </div>
        </div>

        {/*  icons with text */}
        <div className="relative bg-gradient-to-r from-[#3579F6] to-[#1F4790]">
          <div
            className="mt-[20px] md:h-[70px] sm:h-[90px] w-full md:max-w-[1200px] mx-auto
    flex flex-col sm:flex-row justify-between items-center text-white text-[16px] gap-[10px] sm:gap-0 px-4"
          >
            {/* Block 1 */}
            <div className="flex items-center gap-[10px] sm:w-1/3 justify-center sm:justify-start">
              <img src={icon1} alt="icon" className="h-[32px] w-[32px] mr-2" />
              <p className="font-medium text-[14px] md:text-[16px] leading-[100%] tracking-[0%]">
                Exclusive content rights
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex items-center gap-[10px] sm:w-1/3 justify-center ">
              <img src={icon2} alt="icon" className="h-[32px] w-[32px] mr-2" />
              <span className="font-medium text-[14px] md:text-[16px] leading-[100%] tracking-[0%]">
                Payment handling
              </span>
            </div>

            {/* Block 3 */}
            <div className="flex items-center gap-[10px] sm:w-1/3 justify-center sm:justify-end">
              <img src={icon3} alt="icon" className="h-[32px] w-[32px] mr-2" />
              <span className="font-medium text-[14px] md:text-[16px] leading-[100%] tracking-[0%]">
                Access 100,000+ creator
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
