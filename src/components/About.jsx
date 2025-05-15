import React from 'react';
import dinasor from '../assets/images/dinasor.jpg';
import homeoverlay from '../assets/images/home-hero-btm-overLay.webp';

const About = () => {
  return (
    <>
  {/* Overlay Image */}
      <img
        src={homeoverlay}
        alt="Overlay"
        className="absolute bottom left-0 w-full h-auto z-0 bg-red-500"
      />

    <section
      id="scroll"
      className="relative w-full bg-cover bg-center text-white"
      style={{ 
        backgroundImage: `url(${dinasor})`,
        minHeight: '100vh',
        height: '100vh', 
      }}
    >
    

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 bg-black bg-opacity-40">
        <div className="max-w-4xl">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-6 leading-tight uppercase font-primary">
            Building Worlds <br /> That Inspire
          </h2>

          <p className="max-w-xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed font-secondary">
            Founded in 2004 and headquartered in Singapore with over <br />
            4200 employees across 25 offices in Asia, Europe, and North <br />
            America, Virtuos is one of the largest independent video game <br />
            development companies. Specializing in full-cycle game <br />
            development and art production, we have delivered high- <br />
            quality content for over 1500 games across all platforms, <br />
            working with 23 of the top 25 gaming companies worldwide.
          </p>

          {/* Stats Section */}
          <div className="mt-12 flex flex-wrap justify-between max-w-3xl gap-4 font-primary bg-red-500 m-auto p-4">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                4200+
              </div>
              <div className="text-xs sm:text-sm uppercase mt-2">People</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                25
              </div>
              <div className="text-xs sm:text-sm uppercase mt-2">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                900+
              </div>
              <div className="text-xs sm:text-sm uppercase mt-2">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                21
              </div>
              <div className="text-xs sm:text-sm uppercase mt-2">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
                1500+
              </div>
              <div className="text-xs sm:text-sm uppercase mt-2">Titles</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default About;