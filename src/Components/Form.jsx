import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Menimage from '../assets/images/Menimage.png';
import Button from "./Button";

const Form = () => {
  return (
    <div id="contact-us" className="form-comp flex flex-col md:flex-row items-center justify-center min-h-screen
     bg-[#f9f9f9]   gap-4 sm:gap-6">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 bg-white  sm:p-10 p-4 rounded-2xl">
        <p className="font-bold text-[18px] leading-[18px] tracking-[0%] text-[#3579F6] 
        text-sm mb-2 ">Get in touch</p>
        <h2 className="text-[26px] lg:text-[32px] lg:leading-[32px] tracking-[0%] text-[#000]
        font-bold mb-3">Let’s Chat , Reach Out to Us</h2>
        <p className="font-normal text-[16px] leading-[100%] tracking-[0%] text-gray-600
         mb-6 text-sm">
          have questions or feedback? we’re here to help. Send us a message , and we’ll respond within 24 hours.       
        </p>
        <form className="space-y-3 sm:space-y-4">
          {/* First Name & Last Name */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                placeholder="Enter first name" 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full" 
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                placeholder="Enter last name" 
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full" 
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" 
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              placeholder="Leave us a message" 
              rows="4" 
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="mt-4 sm:mt-6 flex items-start space-x-2 text-sm">
            <input type="radio" className="mt-0.5" />
            <label className="font-medium text-[14px] text-[#000] leading-[14px] tracking-[0px]">
              I agree to our friendly <a href="#" className="underline">privacy policy</a>
            </label>
          </div>

          {/* Submit Button */}
          {/* <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all w-full sm:w-auto"
          >
            Submit →
          </button> */}
<Button text="Submit" showShadow={false} />

        </form>
      </div>

      {/* Right - Image and Contact Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="rounded-2xl overflow-hidden h-[250px] sm:h-[350px] md:h-auto">
          <img
            src={Menimage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full max-w-xl mx-auto md:mx-0 rounded-[22px] p-4 sm:p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <MdEmail className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] text-blue-400 px-2 py-1 rounded-full bg-[#328BFF29]" />
            <div className="flex flex-col gap-[6px]">
              <span className="text-black font-medium text-16px leading-[100%] tracking-[0%]">Email</span>
              <span className="text-[#8F8F8F] text-[16px] font-normal leading-[100%] tracking-[0%]">public1@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MdPhone className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] text-blue-400 px-2 py-1 rounded-full bg-[#328BFF29]" />
            <div className="flex flex-col gap-[6px]">
              <span className="text-black font-medium text-16px leading-[100%] tracking-[0%]">Phone</span>
              <span className="text-[#8F8F8F] text-[16px] font-normal leading-[100%] tracking-[0%]">(02520)43568901</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-center md:justify-start space-x-3 sm:space-x-4 pt-2">
            <a href="#"><FaFacebookF className="h-[30px] w-[30px] sm:h-[32px] sm:w-[32px] px-2 text-white rounded-full bg-blue-600" /></a>
            <a href="#"><FaLinkedinIn className="h-[30px] w-[30px] sm:h-[32px] sm:w-[32px] px-2 text-white rounded-full bg-blue-700" /></a>
            <a href="#"><FaInstagram className="h-[30px] w-[30px] sm:h-[32px] sm:w-[32px] px-2 text-white rounded-full bg-pink-500" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;