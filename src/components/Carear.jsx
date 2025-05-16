import React from 'react';
import carearBg from '../assets/images/carearbg.jpg';

const Career = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${carearBg})`,
          backgroundSize: 'cover', // Ensure full coverage
          backgroundRepeat: 'no-repeat', // Prevent repetition
          backgroundColor: '#25282A', // Match overlay to avoid gray gaps
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#25282A] opacity-20"></div>

        {/* Content */}
        <div className="relative w-full max-w-[1280px] text-center sm:text-left text-white px-4 sm:px-6 md:px-8">
          <div className="mx-auto sm:ml-20 max-w-[90%] sm:max-w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-semibold mb-3 sm:mb-4 md:mb-6 leading-snug sm:leading-tight uppercase font-primary">
              Ready to embark on your
              <br className="hidden sm:inline" /> game dev journey?
            </h1>
            <p className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto sm:mx-0 mb-4 sm:mb-6 md:mb-12 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed font-secondary">
              Talent development is at the core of what we stand for. Join our global team and work on some of the most anticipated titles in the industry.
            </p>
          </div>
        </div>

        {/* Responsive Background Adjustments */}
        <style jsx>{`
          @media only screen and (max-width: 767px) {
            div[style*="background-image"] {
              background-size: 150% !important; /* Enhanced zoom for mobile */
              background-position: center !important; /* Center the image */
            }
          }
          @media only screen and (min-width: 768px) and (max-width: 1023px) {
            div[style*="background-image"] {
              background-size: 140% !important; /* Adjusted zoom for medium devices */
              background-position: center !important;
            }
          }
          @media only screen and (max-width: 640px) {
            .max-w-\[90\%\] {
              max-width: 90% !important; /* Ensure container width is constrained on mobile */
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Career;