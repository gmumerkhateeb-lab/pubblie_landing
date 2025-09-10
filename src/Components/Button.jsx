import React from 'react'
import Buttonshadow from "../assets/images/Buttonshadow.png";
import { FiArrowUpRight } from "react-icons/fi";


const Button = ({ text = "Create Account Now", showShadow = true  }) => {
  return (
<>
  <div className="flex flex-col relative z-10">
          <div className="flex flex-col items-center  justify-center ">
            <div className="flex items-center justify-center relative">
              <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow-[0_20px_50px_rgba(59,130,246,0.3)]  transition duration-300">
               {text}
              </button>
              <div className="w-[10px] h-[20px] ml-[-5px] mr-[-5px] bg-blue-500"></div>
              <FiArrowUpRight
                size={16}
                className="bg-blue-500 h-[40px] w-[40px] rounded-full text-white"
              />
            </div>
             {showShadow && (
          <img
            src={Buttonshadow}
            alt="shadow"
            className="h-[50px] mt-[-10px] w-[310px] rounded-[29px]"
          />
        )}
          </div>
        </div>
</>
  )
}

export default Button