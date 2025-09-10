import React from "react";
import { Package, BarChart3, Monitor, Lock } from "lucide-react";
import Cardtopshadow from "../assets/icons/Cardtopshadow.png";
import Cardbottomshadow from "../assets/icons/Cardbottomshadow.png";

const cardData = [
  {
    icon: Package,
    title: "Product Seeding\nIntegration",
    description:
      "Easily manage product seeding workflows, from shipment tracking to authentic user-generated content submissions.",
  },
  {
    icon: BarChart3,
    title: "Post-Campaign\nAnalytics",
    description:
      "Gain actionable insights with detailed reports on reach, engagement, and ROI, empowering you to refine future campaigns.",
  },
  {
    icon: Monitor,
    title: "Comprehensive\nDashboards",
    description:
      "Dashboards for advertisers & influencers, simplify workflows, campaign management is seamless for everyone.",
  },
  {
    icon: Lock,
    title: "Secure Escrow Paymet System",
    description:
      "Ensure trust & transparency with a payment system that holds funds securely  campaign requirements are fulfilled.",
  },
];

const Cards = () => {
  return (
    <div
      id="features"
      className="features-comp bg-[#11243E] relative overflow-hidden "
    >
      {/* Header */}

      {/* Top Shadow - Hidden on md and below, reduced height on xl */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 z-10  w-[850px]">
        <img
          src={Cardtopshadow}
          alt=""
          className="xl:w-[850px] lg:w-[250px] lg:h-[200px] xl:h-[650px] object-cover"
        />
      </div>

      {/* Bottom Shadow - Hidden on md and below, reduced height on xl */}
      <div className="hidden lg:block absolute bottom-0 right-0">
        <img
          src={Cardbottomshadow}
          alt=""
          className=" h-16 lg:h-[200px]  xl:h-[622px] object-cover"
        />
      </div>

      <div
        className="text-center lg:text-right mb-4 sm:mb-3 lg:mb-8 py-8 sm:py-10
       px-4 sm:px-8 lg:px-16"
      >
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFFB2] to-[#8BBFFF] text-2xl sm:text-3xl md:text-4xl
         lg:text-[40px] xl:text-5xl font-bold sm:mb-1 md:mb-4 lg:mb-6"
        >
          What makes Pubblie different
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2">
          Revolutionizing the way advertisers and influencers collaborate for
          unparalleled success.
        </p>
      </div>

      {/* Cards */}
      <div
        className="px-4 sm:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      gap-4 sm:gap-6 max-w-7xl mx-[20px]"
      >
        {cardData.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.18)] rounded-[25px] h-[280px] sm:h-[300px] lg:h-[326px] w-full max-w-[240px] sm:max-w-[220px] lg:max-w-[228px] mx-auto -rotate-1 sm:-rotate-2 lg:-rotate-3 relative
    border border-slate-100/10 px-4 sm:px-6 py-6 sm:py-8 group transition duration-300 hover:scale-105
  shadow-[6px_6px_10px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
  before:absolute before:inset-0 before:rounded-[25px] before:shadow-[inset_-4px_-4px_4px_0_rgba(50,139,255,0.16)] before:pointer-events-none
  after:absolute after:inset-0 after:rounded-[25px] after:shadow-[inset_4px_4px_4px_0_rgba(50,139,255,0.12)] after:pointer-events-none"
            >
              <div
                className="mx-auto w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] lg:w-[73px] lg:h-[73px] rounded-full bg-[rgba(255,255,255,0.12)]
    flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300
  relative 
  before:absolute before:inset-0 before:rounded-full before:shadow-[inset_4.55px_4.55px_4.55px_0_rgba(50,139,255,0.16)] before:pointer-events-none
  after:absolute after:inset-0 after:rounded-full after:shadow-[inset_-4.55px_-4.55px_4.55px_0_rgba(72,72,72,0.25)] after:pointer-events-none"
              >
                <Icon
                  className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[41px]
                 lg:h-[41px] text-white opacity-90"
                />
              </div>
              <h3
                className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold 
              text-white whitespace-pre-line leading-tight mb-3 sm:mb-4 text-center"
              >
                {card.title}
              </h3>
              <p
                className="text-[12px]  sm:text-[13px] lg:text-[14px] text-white/70
               font-medium leading-snug text-center"
              >
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Button */}

      <div className="relative mx-auto text-center mt-18   z-[-22px]">
        <button
          className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 
     w-[180px] sm:w-[218px] h-[48px] sm:h-[61px] text-[14px] sm:text-[16px]
     bg-white text-blue-600 hover:bg-blue-500 hover:text-white px-4 sm:px-6
     py-2 sm:py-3 rounded-full transition-all duration-300 shadow-md
     hover:scale-105 inline-flex items-center justify-center"
        >
          <svg
            className="w-10 h-8 sm:w-15 sm:h-12 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" strokeWidth={2} />
          </svg>
          <span className="font-medium w-35 py-[20px] px-[8px] text-[14px] sm:text-[16px] leading-[100%] tracking-[0%] text-[#3579F6] hover:text-white">
            Join Us Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Cards;
