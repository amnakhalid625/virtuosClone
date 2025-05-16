import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import mapImg from '../assets/images/mapbg.png';

// CSS for the shining animation
const shineAnimation = `
  @keyframes shine {
    0% {
      opacity: 0.6;
      filter: brightness(1);
    }
    50% {
      opacity: 1;
      filter: brightness(1.5);
    }
    100% {
      opacity: 0.6;
      filter: brightness(1);
    }
  }
`;

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Enhanced region configurations with more studios
const regionConfigs = {
  'ALL': {
    scale: 120,
    center: [20, 30],
    studios: [
      // North America
      { name: "Vancouver", coordinates: [-123.1207, 49.2827], region: "NORTH AMERICA", country: "Canada" },
      { name: "Seattle", coordinates: [-122.3321, 47.6062], region: "NORTH AMERICA", country: "United States" },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749], region: "NORTH AMERICA", country: "United States" },
      { name: "Los Angeles", coordinates: [-118.2437, 34.0522], region: "NORTH AMERICA", country: "United States" },
      { name: "Austin", coordinates: [-97.7431, 30.2672], region: "NORTH AMERICA", country: "United States" },
      { name: "Chicago", coordinates: [-87.6298, 41.8781], region: "NORTH AMERICA", country: "United States" },
      { name: "New York", coordinates: [-74.0060, 40.7128], region: "NORTH AMERICA", country: "United States" },
      { name: "Montreal", coordinates: [-73.5674, 45.5017], region: "NORTH AMERICA", country: "Canada" },
      
      // Europe
      { name: "London", coordinates: [-0.1278, 51.5074], region: "EUROPE", country: "United Kingdom" },
      { name: "Paris", coordinates: [2.3522, 48.8566], region: "EUROPE", country: "France" },
      { name: "Berlin", coordinates: [13.4050, 52.5200], region: "EUROPE", country: "Germany" },
      { name: "Stockholm", coordinates: [18.0686, 59.3293], region: "EUROPE", country: "Sweden" },
      { name: "Barcelona", coordinates: [2.1734, 41.3851], region: "EUROPE", country: "Spain" },
      { name: "Amsterdam", coordinates: [4.8952, 52.3702], region: "EUROPE", country: "Netherlands" },
      
      // Asia
      { name: "Tokyo", coordinates: [139.6917, 35.6895], region: "ASIA", country: "Japan" },
      { name: "Seoul", coordinates: [126.9780, 37.5665], region: "ASIA", country: "South Korea" },
      { name: "Shanghai", coordinates: [121.4737, 31.2304], region: "ASIA", country: "China" },
      { name: "Singapore", coordinates: [103.8198, 1.3521], region: "ASIA", country: "Singapore" },
      { name: "Bangalore", coordinates: [77.5946, 12.9716], region: "ASIA", country: "India" },
      { name: "Sydney", coordinates: [151.2093, -33.8688], region: "ASIA", country: "Australia" }
    ]
  },
  'NORTH AMERICA': {
    scale: 300,
    center: [-100, 40],
    studios: [
      { name: "Vancouver", coordinates: [-123.1207, 49.2827], country: "Canada" },
      { name: "Seattle", coordinates: [-122.3321, 47.6062], country: "United States" },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749], country: "United States" },
      { name: "Los Angeles", coordinates: [-118.2437, 34.0522], country: "United States" },
      { name: "Austin", coordinates: [-97.7431, 30.2672], country: "United States" },
      { name: "Chicago", coordinates: [-87.6298, 41.8781], country: "United States" },
      { name: "New York", coordinates: [-74.0060, 40.7128], country: "United States" },
      { name: "Montreal", coordinates: [-73.5674, 45.5017], country: "Canada" }
    ]
  },
  'EUROPE': {
    scale: 400,
    center: [15, 50],
    studios: [
      { name: "London", coordinates: [-0.1278, 51.5074], country: "United Kingdom" },
      { name: "Paris", coordinates: [2.3522, 48.8566], country: "France" },
      { name: "Berlin", coordinates: [13.4050, 52.5200], country: "Germany" },
      { name: "Stockholm", coordinates: [18.0686, 59.3293], country: "Sweden" },
      { name: "Barcelona", coordinates: [2.1734, 41.3851], country: "Spain" },
      { name: "Amsterdam", coordinates: [4.8952, 52.3702], country: "Netherlands" }
    ]
  },
  'ASIA': {
    scale: 300,
    center: [100, 30],
    studios: [
      { name: "Tokyo", coordinates: [139.6917, 35.6895], country: "Japan" },
      { name: "Seoul", coordinates: [126.9780, 37.5665], country: "South Korea" },
      { name: "Shanghai", coordinates: [121.4737, 31.2304], country: "China" },
      { name: "Singapore", coordinates: [103.8198, 1.3521], country: "Singapore" },
      { name: "Bangalore", coordinates: [77.5946, 12.9716], country: "India" },
      { name: "Sydney", coordinates: [151.2093, -33.8688], country: "Australia" }
    ]
  }
};

const Map = () => {
  const [activeRegion, setActiveRegion] = useState('ALL');
  const [hoveredStudio, setHoveredStudio] = useState(null);
  const currentConfig = regionConfigs[activeRegion];

  // Get list of countries with studios for the current region
  const studioCountries = currentConfig.studios.map(studio => studio.country);

  return (
    <div className="bg-transparent bg-[linear-gradient(180deg,_#0D0E0F_0%,_#25282A_100%)] text-white min-h-screen py-16 px-4">
      {/* Inject the shine animation styles */}
      <style>{shineAnimation}</style>
      
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl  sm:text-4xl md:text-6xl lg:text-8xl font-semibold mb-4 md:mb-6 leading-tight uppercase font-primary text-center">GLOBAL PRESENCE</h1>
        <p className=" mb-6 md:mb-12  text-sm sm:text-base md:text-lg leading-relaxed font-secondary text-center ">
         Access our distributed network of studios and tap into our global talent and expertise. We help improve development efficiency, cost and time-to-market, so you can stay focused on building better games.
        </p>

        {/* Region Filter */}
        <div className="flex justify-center gap-6 mb-12 text-lg font-secondary">
          {Object.keys(regionConfigs).map((region, index) => (
            <React.Fragment key={region}>
              <button
                className={`${activeRegion === region ? 'text-white font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
              {index < Object.keys(regionConfigs).length - 1 && <span className="text-gray-500">/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Map Container with Background Image */}
        <div 
          className="border-2 border-gray-700 rounded-3xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${mapImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '700px'
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 ">
            <ComposableMap 
              projection="geoMercator"
              projectionConfig={{
                scale: currentConfig.scale,
                center: currentConfig.center
              }}
              className="w-full h-full"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // Check if this country has studios
                    const hasStudio = studioCountries.includes(geo.properties.name);
                    
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="rgb(4, 82, 107)"
                        stroke="rgba(51, 65, 85, 0.8)"
                        strokeWidth={0.5}
                       style={{
  default: { outline: 'none' },
  hover: { fill: 'rgb(90, 155, 175)' }
}}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Shining orange markers */}
              {currentConfig.studios.map((studio) => (
                <Marker key={`${studio.name}-${studio.coordinates.join(',')}`} coordinates={studio.coordinates}>
                  <g
                    onMouseEnter={() => setHoveredStudio(studio.name)}
                    onMouseLeave={() => setHoveredStudio(null)}
                  >
                    {/* Outer glow (only visible on hover) */}
                    {hoveredStudio === studio.name && (
                      <circle
                        r={16}
                        fill="#DC7D28"
                        fillOpacity="0.2"
                        stroke="none"
                      />
                    )}
                    {/* Middle glow */}
                    <circle
                      r={12}
                      fill="#DC7D28"
                      fillOpacity={hoveredStudio === studio.name ? "0.4" : "0.2"}
                      stroke="none"
                    />
                    {/* Main marker */}
                    <circle
                      r={8}
                      fill="#e7e9ee"
                      stroke="#DC7D28"
                      strokeWidth={1.5}
                      style={{
                        filter: hoveredStudio === studio.name ? 'brightness(5)' : 'brightness(1)',
                        transition: 'filter 0.3s ease'
                      }}
                      data-tip={studio.name}
                    />
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
          <ReactTooltip 
            className="!bg-black !text-white !px-3 !py-2 !rounded-md"
            place="top"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;