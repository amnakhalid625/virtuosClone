import React, { useState } from 'react';
import logoImg from '../assets/images/logo.webp';
import menuIcon from '../assets/images/menuImg.webp';
import bgImg from '../assets/images/menuBg.webp';
// hover background images
import aboutBg from '../assets/images/about-bg.webp';
import servicesBg from '../assets/images/services-bg.webp';
import worksBg from '../assets/images/works-bg.webp';
import careersBg from '../assets/images/menuBg.webp';
import newsBg from '../assets/images/news-bg.webp';
import eventsBg from '../assets/images/events-bg.webp';
import contactBg from '../assets/images/menuBg.webp';

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(bgImg);

  // Menu items with their corresponding background images
  const menuItems = [
    { title: 'About Us', bg: aboutBg },
    { title: 'Our Services', bg: servicesBg },
    { title: 'Our Works', bg: worksBg },
    { title: 'Careers', bg: careersBg },
    { title: 'News', bg: newsBg },
    { title: 'Events', bg: eventsBg },
    { title: 'Contact Us', bg: contactBg }
  ];

  return (
    <>
      <header className="w-full px-6 py-4 md:py-6 flex justify-between items-center flex-wrap bg-transparent font-secondary absolute top-0 left-0 z-50 text-white">
        {/* Menu Button */}
        <div className="flex items-center gap-2">
          <button onClick={() => setMenuOpen(true)} className="w-8 h-8 md:w-10 md:h-10">
            <img src={menuIcon} alt="Menu" className="w-full h-full object-contain" />
          </button>
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white">
            Menu
          </span>
        </div>

        {/* Center Logo */}
        <div className="flex-grow flex justify-center">
          <a href="https://www.virtuosgames.com">
            <img src={logoImg} alt="Virtuos Logo" className="h-8 md:h-14 object-contain" />
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 text-sm md:text-base font-medium">
          {/* Language Switch */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 hover:text-[#FFC695] transition">
              <span className="uppercase">English</span>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 320 512">
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 
                0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 
                33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 
                24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 
                9.4 24.6 0 33.9l-136 136c-9.2 
                9.4-24.4 9.4-33.8 0z" />
              </svg>
            </button>
            {langOpen && (
              <ul className="absolute right-0 mt-2 bg-white border rounded shadow text-sm z-50 text-black">
                {[
                  ['Chinese', '/zh'],
                  ['Japanese', '/ja'],
                  ['Vietnamese', '/vi'],
                  ['Korean', '/ko'],
                  ['French', '/fr'],
                ].map(([name, path]) => (
                  <li key={path}>
                    <a
                      href={`https://www.virtuosgames.com${path}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact Button */}
          <a
            href="#"
            className="hidden md:inline-block text-[#FFC695] uppercase text-sm md:text-base font-semibold px-5 py-2 hover:opacity-75 transition tracking-wide"
            style={{ textShadow: '0 0 12px #ffc695' }}
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Full-Screen Menu Panel */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[999] text-white overflow-hidden"
          style={{
            backgroundImage: `url(${currentBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.5s ease-in-out'
          }}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={() => {
                setMenuOpen(false);
                setCurrentBg(bgImg); 
              }}
              className="text-4xl font-bold hover:text-[#FFC695] transition duration-300"
            >
              &times;
            </button>
          </div>

          {/* Main Content Area */}
          <div className="container mx-auto h-full flex flex-col ">
            {/* Logo at top center */}
            <div className="flex justify-center pt-5">
              <img
                src={logoImg}
                alt="Virtuos Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Menu Links */}
            <div className="flex-grow flex items-start justify-start ">
              <nav className="w-full max-w-7xl mx-auto font-primary">
                <ul className="space-y-6 md:space-y-8 ">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.title.toLowerCase().replace(' ', '-')}`}
                        className="block text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider hover:text-[#FFC695] transition duration-300"
                        onMouseEnter={() => setCurrentBg(item.bg)}
                        onMouseLeave={() => setCurrentBg(bgImg)}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Footer with social links */}
            <div className="pb-10 px-6">
              <div className="flex flex-col md:flex-row justify-end items-center gap-6">
               

                {/* Right side social links */}
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-[#FFC695] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#FFC695] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#FFC695] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#FFC695] transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;