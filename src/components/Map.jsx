import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import mapbg from '../assets/images/mapbg.png';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Map = () => {
  const [activeRegion, setActiveRegion] = useState('ALL');

  const regions = ['ALL', 'NORTH AMERICA', 'EUROPE', 'ASIA'];

  return (
    <section className="flex flex-col items-center px-4 py-20 min-h-screen bg-[#0D0E0F] text-white">
      <h1 className="text-5xl md:text-6xl font-bold font-primary text-center">GLOBAL PRESENCE</h1>
      <p className="text-center max-w-3xl text-lg md:text-xl mt-6 mb-12">
        Access our distributed network of studios and tap into our global talent and expertise. We help
        improve development efficiency, cost and time-to-market, so you can stay focused on building
        better games.
      </p>

      <div className="flex gap-4 mb-12">
        {regions.map((region) => (
          <React.Fragment key={region}>
            <button
              className={`text-lg ${activeRegion === region ? 'font-bold text-white' : 'text-gray-400'}`}
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </button>
            {region !== 'ASIA' && <span className="text-gray-400">/</span>}
          </React.Fragment>
        ))}
      </div>

      <div 
        className="w-full max-w-9xl border border-gray-600 rounded-lg overflow-hidden relative"
        style={{
          backgroundImage: `url(${mapbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '700px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <ComposableMap data-tip="" className="w-full h-full">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(45, 55, 72, 0.7)" // Semi-transparent fill
                    stroke="rgba(74, 85, 104, 0.8)"
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: 'rgba(79, 209, 197, 0.8)', outline: 'none' },
                      pressed: { fill: 'rgba(56, 178, 172, 0.8)', outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
        <ReactTooltip />
      </div>
    </section>
  );
};

export default Map;