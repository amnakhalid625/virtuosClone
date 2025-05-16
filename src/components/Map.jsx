import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import mapImg from '../assets/images/mapbg.png';

// Shine animation
const shineAnimation = `
  @keyframes shine {
    0% { opacity: 0.6; filter: brightness(1); }
    50% { opacity: 1; filter: brightness(1.5); }
    100% { opacity: 0.6; filter: brightness(1); }
  }
`;

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Studio location data
const regionConfigs = {
  'ALL': {
    scale: 120,
    center: [20, 30],
    studios: [
      { name: "Vancouver", coordinates: [-123.1207, 49.2827], region: "NORTH AMERICA", country: "Canada" },
      { name: "Seattle", coordinates: [-122.3321, 47.6062], region: "NORTH AMERICA", country: "United States" },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749], region: "NORTH AMERICA", country: "United States" },
      { name: "Los Angeles", coordinates: [-118.2437, 34.0522], region: "NORTH AMERICA", country: "United States" },
      { name: "Austin", coordinates: [-97.7431, 30.2672], region: "NORTH AMERICA", country: "United States" },
      { name: "Chicago", coordinates: [-87.6298, 41.8781], region: "NORTH AMERICA", country: "United States" },
      { name: "New York", coordinates: [-74.0060, 40.7128], region: "NORTH AMERICA", country: "United States" },
      { name: "Montreal", coordinates: [-73.5674, 45.5017], region: "NORTH AMERICA", country: "Canada" },
      { name: "London", coordinates: [-0.1278, 51.5074], region: "EUROPE", country: "United Kingdom" },
      { name: "Paris", coordinates: [2.3522, 48.8566], region: "EUROPE", country: "France" },
      { name: "Berlin", coordinates: [13.4050, 52.5200], region: "EUROPE", country: "Germany" },
      { name: "Stockholm", coordinates: [18.0686, 59.3293], region: "EUROPE", country: "Sweden" },
      { name: "Barcelona", coordinates: [2.1734, 41.3851], region: "EUROPE", country: "Spain" },
      { name: "Amsterdam", coordinates: [4.8952, 52.3702], region: "EUROPE", country: "Netherlands" },
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
    studios: [] // Add filtered studios if needed
  },
  'EUROPE': {
    scale: 400,
    center: [15, 50],
    studios: []
  },
  'ASIA': {
    scale: 300,
    center: [100, 30],
    studios: []
  }
};

const Map = () => {
  const [activeRegion, setActiveRegion] = useState('ALL');
  const [hoveredStudio, setHoveredStudio] = useState(null);

  const currentConfig = regionConfigs[activeRegion];
  const studioCountries = currentConfig.studios.map((studio) => studio.country);

  return (
    <div className="bg-[#25282A] text-white py-16 px-4">
      <style>{shineAnimation}</style>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center uppercase font-primary">
          GLOBAL PRESENCE
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-center max-w-3xl mx-auto font-secondary mb-10 px-4">
          Access our distributed network of studios and tap into our global talent and expertise.
          We help improve development efficiency, cost and time-to-market, so you can stay focused
          on building better games.
        </p>

        {/* Region Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 mb-10 text-base sm:text-lg font-secondary">
          {Object.keys(regionConfigs).map((region, idx) => (
            <React.Fragment key={region}>
              <button
                className={`${
                  activeRegion === region
                    ? 'text-white font-bold underline underline-offset-4'
                    : 'text-gray-400'
                } transition duration-200`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
              {idx < Object.keys(regionConfigs).length - 1 && (
                <span className="text-gray-500 hidden sm:inline">/</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Map Container */}
        <div
          className="relative rounded-3xl overflow-hidden border-0 lg:border-2 border-gray-700"
          style={{
            backgroundImage: `url(${mapImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '600px'
          }}
        >
          <div className="absolute inset-0">
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

              {currentConfig.studios.map((studio) => (
                <Marker
                  key={`${studio.name}-${studio.coordinates.join(',')}`}
                  coordinates={studio.coordinates}
                >
                  <g
                    onMouseEnter={() => setHoveredStudio(studio.name)}
                    onMouseLeave={() => setHoveredStudio(null)}
                  >
                    {hoveredStudio === studio.name && (
                      <circle r={6} fill="#DC7D28" fillOpacity="0.6" />
                    )}
                    <circle
                      r={15}
                      fill="#DC7D28"
                      fillOpacity={hoveredStudio === studio.name ? "0.4" : "0.2"}
                      style={{ animation: 'shine 2s infinite' }}
                    />
                    <circle
                      r={8}
                      fill="#EABE65"
                      stroke="#DC7D28"
                      strokeWidth={1.5}
                      style={{
                        filter: hoveredStudio === studio.name ? 'brightness(5)' : 'brightness(1)',
                        transition: 'filter 0.3s ease'
                      }}
                      data-tooltip-id="studio-tooltip"
                      data-tooltip-content={studio.name}
                    />
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <ReactTooltip
            id="studio-tooltip"
            className="!bg-[#25282A] !text-white !px-3 !py-2 !rounded-md"
            place="top"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
