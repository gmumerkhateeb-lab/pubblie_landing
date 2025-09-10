import React, { useState } from 'react';
import Logo from '../assets/icons/logo.png'; // update path as needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white relative z-150 ">
      <div className="px-4 sm:px-6 lg:px-16 w-full">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 mx-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center">
              <img src={Logo} alt="pubbli logo" className="h-6 sm:h-7 md:h-8" />
              <span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold ml-2">pubbli</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
  <a href="#about" className="text-gray-500 leading-[14px] tracking-normal hover:text-gray-800 font-inter font-medium text-sm xl:text-base transition-colors">
    About
  </a>
  <a href="#features" className="text-gray-500 leading-[14px] tracking-normal hover:text-gray-800 font-inter font-medium text-sm xl:text-base transition-colors">
    Features
  </a>
  <a href="#works" className="text-gray-500 leading-[14px] tracking-normal hover:text-gray-800 font-inter font-medium text-sm xl:text-base transition-colors">
    How it works
  </a>
  <a href="#contact-us" className="text-gray-500 leading-[14px] tracking-normal hover:text-gray-800 font-inter font-medium text-sm xl:text-base transition-colors">
    Contact us
  </a>
</div>


          {/* Desktop Right Side Buttons */}
          <div className="hidden xl:flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            <button className="text-gray-700 font-inter font-medium leading-[14px] tracking-normal hover:text-gray-800 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm lg:text-base transition-colors">
              Become a Creator
            </button>
            {/* <button className="bg-black text-white px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 rounded-3xl hover:bg-gray-800 font-medium text-xs sm:text-sm lg:text-base transition-colors">
              Log in as a Brand
            </button> */}
            {/* <button className="bg-[#4262FF] text-white px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 rounded-3xl hover:bg-blue-600 font-medium flex items-center text-xs sm:text-sm lg:text-base transition-colors">
              Sign up
              <span className="ml-1">→</span>
            </button> */}
          </div>

          {/* Mobile and Medium Screen Right Side */}
          <div className="flex xl:hidden items-center space-x-2">
            {/* Removed Sign up button for tablet/laptop */}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-800 p-1.5 sm:p-2 transition-colors"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-200 bg-white">
            <div className="px-2 sm:px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-colors">About</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-colors">Features</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-colors">How it works</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-colors">Contact us</a>

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-2 flex flex-col items-center justify-center">
                <button className="w-full max-w-xs text-left md:text-center px-3 py-2 text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base transition-colors">
                  Become a Creator
                </button>
                {/* <button className="w-full max-w-xs bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700 font-medium text-sm sm:text-base transition-colors">
                  Log in as a Brand
                </button> */}
                {/* <button className="w-full max-w-xs bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 font-medium flex items-center justify-center text-sm sm:text-base transition-colors">
                  Sign up
                  <span className="ml-1">→</span>
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
