import React from 'react';
import Navbar from '../components/Navbar';
import homeBg from '../assets/images/deskbg.webp';
import mobileBg from '../assets/images/mobile-bg.webp';
import tankImg from '../assets/images/tank.webp';
import textImg from '../assets/images/homeText.webp';
import smokeImg from '../assets/images/smoke.webp';
import smokeSecondImg from '../assets/images/smokeRight.webp';
import About from '../components/About';
import { Video } from '../components/Video';
import Map from '../components/Map';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Partners from '../components/Partners';
import News from '../components/News';
import Carear from '../components/Carear';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Background Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background images for small devices */}
        <div className="absolute inset-0">
          {/* Desktop Background */}
          <div 
            className="hidden md:block h-full w-full bg-cover bg-center "
            style={{ backgroundImage: `url(${homeBg})` }}
          ></div>
          {/* Mobile Background */}
          <div 
            className="md:hidden h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${mobileBg})` }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        </div>

        {/* Tank Image - Now above text on mobile */}
        <img
          src={tankImg}
          alt="tank"
          className="absolute z-40 
                    left-1/2 transform -translate-x-1/2 
                    top-[25%] sm:top-[30%] md:top-1/3 md:bottom-[35%] 
                    w-[40vw] max-w-[200px] 
                    md:right-[13%] md:left-auto md:w-[200px]"
        />

        <div className="absolute inset-0 flex items-center justify-center z-30 ">
          <img
            src={textImg}
            alt="WE MAKE GAMES BETTER TOGETHER"
            className="w-[90%] max-w-[400px] md:max-w-[480px] mt-40 md:mt-16 "  
          />
        </div>

        {/* Smoke Elements - Hidden on mobile */}
        <div className="hidden md:block">
          <img 
            src={smokeSecondImg} 
            alt="smoke effect" 
            className="absolute top-1/4 left-20 w-[600px]" 
          />
          <img
            src={smokeImg}
            alt="smoke effect"
            className="absolute top-1/4 right-1/4 w-[250px] opacity-40 mix-blend-overlay z-10"
          />
        </div>

        {/* Bottom Smoke - Hidden on mobile */}
        <div className="hidden md:block">
          <img
            src={smokeSecondImg}
            alt="smoke effect"
            className="absolute bottom-10 left-10 w-[200px] opacity-30 mix-blend-overlay z-10"
          />
          <img
            src={smokeImg}
            alt="smoke effect"
            className="absolute bottom-[-5%] right-0 w-[500px]"
          />
        </div>
      </div>

      <About />
      <Video />
      <Map />
      <Services />
      <Projects />
      <Partners />
      <News />
      <Carear/>
      <Footer />
    </>
  );
};

export default Home;
