import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import projectbgImg from '../assets/images/projectbg.webp';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.png';
import p7 from '../assets/images/p7.png';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.jpg';
import p11 from '../assets/images/p11.png';
import p12 from '../assets/images/p12.png';
import p13 from '../assets/images/p13.png';
import p14 from '../assets/images/p14.png';
import p15 from '../assets/images/p15.jpg';
import p16 from '../assets/images/p16.png';
import p17 from '../assets/images/p17.png';
import p18 from '../assets/images/p18.png';
import p19 from '../assets/images/p19.jpg';
import p20 from '../assets/images/p20.webp';
import p21 from '../assets/images/p21.png';
import p22 from '../assets/images/p22.png';
import p23 from '../assets/images/p23.png';
import p24 from '../assets/images/p24.png';
import p25 from '../assets/images/p25.png';
import p26 from '../assets/images/p26.png';
import p27 from '../assets/images/p22.png';
import p28 from '../assets/images/p23.png';
import p29 from '../assets/images/p24.png';
import p30 from '../assets/images/p25.png';

const Projects = () => {
  const projects = [
    { id: 1, title: 'The Callisto Protocol', studio: 'Omeda Studios', image: p1 },
    { id: 2, title: "Marvel's Midnight Suns", studio: 'Firaxis Games', image: p2 },
    { id: 3, title: 'Grounded', studio: 'Obsidian Entertainment', image: p3 },
    { id: 4, title: 'Life Rendered', studio: 'Life Rendered', image: p4 },
    { id: 5, title: 'CrossfireX', studio: 'Smilegate, Remedy Entertainment', image: p5 },
    { id: 6, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p6 },
    { id: 7, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p7 },
    { id: 8, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p8 },
    { id: 9, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p9 },
    { id: 10, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p10 },
    { id: 11, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p11 },
    { id: 12, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p12 },
    { id: 13, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p13 },
    { id: 14, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p14 },
    { id: 15, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p15 },
    { id: 16, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p16 },
    { id: 17, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p17 },
    { id: 18, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p18 },
    { id: 19, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p19 },
    { id: 20, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p20 },
    { id: 21, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p21 },
    { id: 22, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p22 },
    { id: 23, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p23 },
    { id: 24, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p24 },
    { id: 25, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p25 },
    { id: 26, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p26 },
    { id: 27, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p15 },
    { id: 28, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p7 },
    { id: 29, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p25 },
    { id: 30, title: 'PUBG: New State', studio: 'Developer: KRAFTON', image: p4 },
  ];

  return (
    <div
      className="w-full bg-gray-900 text-white py-28"
      style={{
        backgroundImage: `url(${projectbgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Main Title Section */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold mb-4 md:mb-6 text-center uppercase font-primary">Excellence in Every Project</h1>
        <div className="max-w-3xl mx-auto">
          <p className="mx-auto mb-6 md:mb-12 text-sm sm:text-base md:text-lg text-center font-secondary px-4 max-w-3xl py-8">
           We have built a legacy of creating critically acclaimed, award-winning games and setting new standards in development.
From developing concepts, all the way to remaking classic titles — we’ve done it all.
          </p>
        </div>
      </div>

      {/* Projects Slider */}
      <div className="container mx-auto px-4 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          className="mb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex justify-center">
               <div className="relative h-[420px] w-[300px] group cursor-pointer overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-x-0 bottom-0 h-1/2 z-10 bg-gradient-to-t from-[#04526b]/60 to-transparent" />
  
  <div className="absolute bottom-0 left-0 p-6 z-20 w-full transition-all duration-500 group-hover:translate-y-[-10px]">
    <h3 className="text-xl font-bold mb-1 transition-opacity duration-300 group-hover:opacity-100">
      {project.title}
    </h3>
    <p className="text-sm text-gray-300 transition-opacity duration-500 group-hover:opacity-90">
      {project.studio}
    </p>
  </div>
  
  <div className="absolute right-6 bottom-6 z-20 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
    <div className="bg-orange-500 p-3 rounded-full shadow-md hover:bg-orange-600 transition-colors">
      <ArrowRight size={20} />
    </div>
  </div>
</div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Dots */}
        <div className="flex justify-center items-center space-x-2 mt-10">
          {[...Array(5)].map((_, index) => (
            <div key={index} className={`h-2 rounded-full ${index === 0 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-600'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
