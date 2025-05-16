import React, { useState } from 'react';
import logoImg from '../assets/images/logo.webp';
import menuIcon from '../assets/images/menuImg.webp'; // Your local menu image

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 md:py-6 flex justify-between items-center flex-wrap bg-transparent font-secondary absolute top-0 left-0 z-50 text-white">
      
      {/* Menu Button */}
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 md:w-10 md:h-10">
          <img
            src={menuIcon}
            alt="Menu"
            className="w-full h-full object-contain"
          />
        </button>
        <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white">
          Menu
        </span>
      </div>

      {/* Center Logo */}
      <div className="flex-grow flex justify-center">
        <a href="https://www.virtuosgames.com">
          <img
            src={logoImg}
            alt="Virtuos Logo"
            className="h-8 md:h-14 object-contain"
          />
        </a>
      </div>

      {/* Right: Language Switch + Contact Button */}
      <div className="flex items-center gap-4 text-sm md:text-base font-medium">
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 hover:text-[#FFC695] transition"
          >
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
  );
};

export default Navbar;
