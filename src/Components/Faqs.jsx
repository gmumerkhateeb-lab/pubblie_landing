import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Faqtop from "../assets/icons/Faqtop.png";
import Faqbottom from "../assets/icons/Faqbottom.png";
import Faqshadow from "../assets/icons/Faqshadow.png";

const faqsData = [
  {
    question: "How does the escrow payment system work?",
    answer:
      "Funds are securely held until the campaign is completed and requirements are met, ensuring trust for both advertisers and influencers.",
  },
  {
    question: "What metrics can I track in the analytics dashboard?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Can I try PUBBLI for free?",
    answer:
      "Funds are securely held until the campaign is completed and requirements are met, ensuring trust for both advertisers and influencers.",
  },
  {
    question: "How are influencers matched to campaigns?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="faqs-comp sm:min-h-[780px] min-h-[660px] relative bg-gradient-to-b
       from-[#03142B] to-[#00060E] py-1 
    md:py-18 px-4 sm:px-8 md:px-16 lg:px-32 text-white overflow-hidden "
    >
      {/* Background Image (unchanged) */}
      <img
        className="absolute -mt-21 left-1/2 transform hidden sm:block -translate-x-1/2"
        src={Faqshadow}
        alt="shadow"
      />

      {/* Left Image - Only shows on lg, xl, and 2xl screens */}
      <img
        src={Faqtop}
        alt="left"
        className="hidden lg:block mt-[-220px] absolute left-0 top-1/2 -translate-y-1/2 w-28 xl:w-40 2xl:w-52"
      />

      {/* Right Image - Only shows on lg, xl, and 2xl screens */}
      <img
        src={Faqbottom}
        alt="right"
        className="hidden lg:block absolute right-0 bottom-0 w-28 xl:w-40 2xl:w-52"
      />

      {/* FAQ Heading (unchanged) */}
      <div className="relative mt-20 text-center mb-12">
        <h2
          className="
    text-[24px] leading-[10px]  sm:text-[28px] sm:leading-[22px]  md:text-[30px] md:leading-[30px]     
    lg:text-[36px] lg:leading-[40px]  xl:text-[42px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[54px]   
    3xl:text-[52px] 3xl:leading-[60px] font-bold tracking-normal text-center mb-6 "
        >
          Frequently Asked Questions
        </h2>
        <p
          className="
    font-bold text-[12px] leading-[10px] sm:text-[14px] sm:leading-[15px]  md:text-[16px] md:leading-[20px]        
    lg:text-[18px] lg:leading-[26px]   xl:text-[20px] xl:leading-[28px]  2xl:text-[22px] 2xl:leading-[30px]       
    3xl:text-[24px] 3xl:leading-[32px]  tracking-normal mt-2 text-white"
        >
          These are the most commonly asked questions about PUBBLI.
        </p>
      </div>

      {/* FAQ Items with scrollable container */}
      <div className="relative max-w-3xl mx-auto max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white text-black rounded-2xl px-6 py-5 transition-all duration-300 ${
                activeIndex === index ? "shadow-lg" : ""
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-base sm:text-lg">
                  {faq.question}
                </h3>
                <span className="text-[#98A2B3] border-[2px] border-[#98A2B3] rounded-full p-[3px]  ">
                  {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </span>
              </div>
              {activeIndex === index && faq.answer && (
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
