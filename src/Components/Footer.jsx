import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import Logo from '../assets/icons/Logo.png'; // update path as needed
import Footershadow from '../assets/images/Footershadow.png'; // update path as needed

const Footer = () => {
  return (
   <footer className="footer-comp h-[147px] bg-gradient-to-r from-[#0f1d3b] to-[#0d1a37] text-white px-6 md:px-10">
  <div className="flex flex-col items-center w-full max-w-[1800px] mx-auto relative">
    <img src={Footershadow} alt="shadow" className="absolute h-[147px] w-[832px]" />

    {/* Logo */}
    <div className="mb-4 flex items-center pt-5">
      <img src={Logo} alt="pubbli logo" className="h-8" />
      <span className="text-2xl font-bold ml-2">pubbli</span>
    </div>

    {/* Divider Line */}
    <hr className="border-gray-500 w-full mb-4" />

    {/* Bottom Text and Icons */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm">
      <p className="mb-3 md:mb-0 text-[14px] tracking-[0%] leading-[20px] font-medium">
        pubbli @ 202X. All rights reserved.
      </p>
      <div className="flex gap-4 text-lg">
        <a href="#" aria-label="YouTube" className="hover:text-gray-300 h-[24px] w-[24px]">
          <FaYoutube />
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-gray-300 h-[24px] w-[24px]">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-gray-300 h-[24px] w-[24px]">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 h-[24px] w-[24px]">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
