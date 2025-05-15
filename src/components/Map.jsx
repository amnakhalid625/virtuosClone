import React, { useState } from 'react';
import mapImage from '../assets/images/mapbg.png'; // Replace with actual path to map image

const regionMarkers = {
  All: [
    { top: '33%', left: '21%' }, // West USA
    { top: '37%', left: '27%' }, // Central USA
    { top: '42%', left: '23%' }, // South USA
    { top: '36%', left: '42%' }, // East Coast
    { top: '35%', left: '48%' }, // UK
    { top: '38%', left: '50%' }, // France
    { top: '40%', left: '52%' }, // Germany
    { top: '42%', left: '54%' }, // Italy
    { top: '44%', left: '56%' }, // Spain
    { top: '41%', left: '58%' }, // Greece
    { top: '45%', left: '68%' }, // India
    { top: '48%', left: '71%' }, // Thailand
    { top: '50%', left: '75%' }, // Malaysia
    { top: '53%', left: '78%' }, // Singapore
    { top: '40%', left: '80%' }, // China
    { top: '38%', left: '82%' }, // South Korea
    { top: '36%', left: '84%' }, // Japan
  ],
  'North America': [
    { top: '33%', left: '21%' },
    { top: '37%', left: '27%' },
    { top: '42%', left: '23%' },
    { top: '36%', left: '42%' },
  ],
  Europe: [
    { top: '35%', left: '48%' },
    { top: '38%', left: '50%' },
    { top: '40%', left: '52%' },
    { top: '42%', left: '54%' },
    { top: '44%', left: '56%' },
    { top: '41%', left: '58%' },
  ],
  Asia: [
    { top: '45%', left: '68%' },
    { top: '48%', left: '71%' },
    { top: '50%', left: '75%' },
    { top: '53%', left: '78%' },
    { top: '40%', left: '80%' },
    { top: '38%', left: '82%' },
    { top: '36%', left: '84%' },
  ]
};

const Map = () => {
  const [activeRegion, setActiveRegion] = useState('All');
  const regions = Object.keys(regionMarkers);

  return (
    <section className="flex flex-col items-center px-4 py-20 min-h-screen bg-[#0D0E0F] text-white">
      <h1 className="text-5xl md:text-6xl font-bold font-primary text-center">GLOBAL PRESENCE</h1>
      <p className="text-center max-w-3xl text-lg md:text-xl mt-6 mb-12">
        Access our distributed network of studios and tap into our global talent and expertise. We help
        improve development efficiency, cost and time-to-market, so you can stay focused on building
        better games.
      </p>

      <div className="flex items-center justify-center gap-6 text-gray-400 mb-12 text-sm md:text-base">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`uppercase tracking-wide border-r border-gray-600 pr-4 last:border-none ${
              activeRegion === region ? 'text-white font-bold' : 'hover:text-white transition'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      <div
        className="relative w-full max-w-[1280px] aspect-[16/9] bg-no-repeat bg-contain md:bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        {regionMarkers[activeRegion].map((marker, index) => (
          <Marker key={index} top={marker.top} left={marker.left} />
        ))}
      </div>
    </section>
  );
};

const Marker = ({ top, left }) => (
  <div
    className="absolute w-4 h-4 rounded-full bg-yellow-400 shadow-lg"
    style={{ top, left }}
  >
    <div className="w-full h-full rounded-full bg-yellow-400 opacity-75 animate-ping absolute inset-0"></div>
  </div>
);

export default Map;
