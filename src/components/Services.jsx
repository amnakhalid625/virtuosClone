import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import duneImg from '../assets/images/dune.png';
import darkSoulImg from '../assets/images/dark_souls.png';
import judasImg from '../assets/images/judas.png';
import portfolioImg from '../assets/images/portfolio.webp';
import stellerImg from '../assets/images/stellar_blade.png';
import leagueoImg from '../assets/images/leagueo.png';
import { Code, Cpu, Palette, Rocket, Settings, Users } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('game');

  const tabs = [
    { key: 'game', label: 'Game Development' },
    { key: 'engineering', label: 'Engineering' },
    { key: 'art', label: 'Art Production' },
  ];

  const icons = {
    game: [<Rocket size={16} />, <Settings size={16} />, <Users size={16} />, <Cpu size={16} />],
    engineering: [<Code size={16} />, <Cpu size={16} />, <Settings size={16} />, <Rocket size={16} />],
    art: [<Palette size={16} />, <Users size={16} />, <Rocket size={16} />, <Settings size={16} />],
  };

  const iconWithLabel = (icon, label, index) => (
    <div
      className="flex items-center space-x-4 p-2 bg-[#25282A] bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-all duration-300"
      key={label}
    >
      {React.cloneElement(icon, { size: 20 })} {/* Increased icon size */}
      <p
        className={`text-lg font-medium ${index % 2 === 0 ? 'font-bold' : ''} text-gray-300 hover:text-white transition-colors duration-300`}
      >
        {label}
      </p>
    </div>
  );

  const ImageWithOverlay = ({ src, alt, client }) => (
    <div className="relative rounded-lg overflow-hidden h-full">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04526b] via-[rgba(37,40,42,0.5)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-sm font-medium">{client}</p>
      </div>
    </div>
  );

  const ImageGallery = ({ images }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
      {images.map((img, i) => (
        <ImageWithOverlay key={i} src={img.src} alt={img.alt} client={img.client} />
      ))}
    </div>
  );

  const tabData = {
    game: {
      title: 'Game Development',
      description: 'Tap on our co-development services, including level design, gameplay design, remakes, and adaptations.',
      features: ['Adaptation', 'Post Launch Content', 'Gameplay & Design', 'AI/ML Integration'],
      images: [
        { src: duneImg, alt: 'Dune', client: 'Funcom' },
        { src: darkSoulImg, alt: 'Dark Souls', client: 'Bandai Namco Entertainment' },
      ],
    },
    engineering: {
      title: 'Engineering',
      description: 'Address technical challenges in your development with cutting-edge tools, or refine gameplay, user interfaces, and engines.',
      features: ['Adaptation', 'Post Launch Content', 'Gameplay & Design', 'AI/ML Integration'],
      images: [
        { src: judasImg, alt: 'Judas', client: 'Ghost Story Games' },
        { src: portfolioImg, alt: 'Portfolio', client: 'Various Clients' },
      ],
    },
    art: {
      title: 'Art Production',
      description: 'Deliver AAA visual content including character, environment, animation, cinematics, and more.',
      features: ['Character Design', 'Environment Art', 'Animation', 'Cinematics'],
      images: [
        { src: stellerImg, alt: 'Stellar Blade', client: 'Shift Up' },
        { src: leagueoImg, alt: 'Leagueo', client: 'Virtuos' },
      ],
    },
  };

  const currentTab = tabData[activeTab];
  const currentIcons = icons[activeTab];

  return (
    <section className="bg-[#25282A] text-white py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-10 ml-2 sm:ml-6 uppercase font-primary">
        Our Services
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-6 md:space-x-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest transition-all duration-300 ${
              activeTab === tab.key ? 'text-white' : 'text-gray-400'
            } hover:text-white`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-[-10px] left-0 h-0.5 w-full bg-white rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Swiper Content */}
      <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className="px-2 sm:px-6">
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <div className="flex flex-col justify-center px-2 sm:px-4">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 uppercase text-white tracking-wide">{currentTab.title}</h4>
              <p className="mb-6 text-gray-300 text-base sm:text-lg max-w-md leading-relaxed">{currentTab.description}</p>

              <div className="space-y-6 p-4 bg-[#25282A] bg-opacity-50 rounded-lg">
                {currentTab.features.map((feature, i) => iconWithLabel(currentIcons[i], feature, i))}
              </div>

              <p className="mt-6 text-gray-400 text-sm italic">Game & IP Development</p>
            </div>

            <ImageGallery images={currentTab.images} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services