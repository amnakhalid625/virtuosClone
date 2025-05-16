import React from 'react';
import carearBg from '../assets/images/carearbg.jpg';

const Career = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${carearBg})`, backgroundSize: '130%' }} 
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#25282A] opacity-20"></div>

        {/* Content */}
        <div className="relative max-w-[1280px] text-left right-80 text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold mb-4 md:mb-6 leading-tight uppercase font-primary ml-20">
            Ready to embark on your<br /> game dev journey?
          </h1>
          <p className="w-full max-w-2xl mb-6 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed font-secondary ml-20">
            Talent development is at the core of what we stand for. Join our global team
            and work on some of the most anticipated titles in the industry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;