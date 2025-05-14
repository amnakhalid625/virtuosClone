import React, { useState } from 'react';
import logoImg from '../assets/images/logo.webp'

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
<header className="w-full px-6 py-5 flex justify-between items-center flex-wrap bg-transparent font-secondary absolute top-0 left-0 z-50 text-white">
      {/* Menu Button */}
      <div className="flex items-center">
        <button className="w-10 h-10">
          <img
            src="https://www.virtuosgames.com/wp-content/uploads/2024/07/menu@2x.webp"
            alt="Menu"
            className="w-full h-full object-contain"
          />
        </button>
        <span className="ml-2 font-medium">MENU</span>
      </div>

      {/* Center Logo */}
      <div className="flex-grow flex justify-center">
        <a href="https://www.virtuosgames.com">
          <img
            src={logoImg}
            alt="Virtuos Logo"
            className="h-10 md:h-14 object-contain"
          />
        </a>
      </div>

      {/* Right-side Language Switcher + Contact Button */}
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center space-x-1"
          >
            <span>English</span>
            <svg className="w-3 h-3" viewBox="0 0 320 512" fill="currentColor">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 
              0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 
              33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 
              24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 
              9.4 24.6 0 33.9l-136 136c-9.2 
              9.4-24.4 9.4-33.8 0z" />
            </svg>
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-2 bg-white border rounded shadow text-sm z-50">
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
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
<a
  href="#"
  className="text-[#FFC695] text-lg font-semibold px-[20px] py-[10px] rounded-none hover:opacity-60 hidden md:inline-block transition duration-300 uppercase"
  style={{ textShadow: '0px 0px 20px #ffc695' }}
>
  Contact Us
</a>


      </div>
    </header>
  );
};

export default Navbar;
