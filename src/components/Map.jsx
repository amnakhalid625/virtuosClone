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
      { name: "Vancouver", coordinates: [-123.1207, 49.2827], region: "NORTH AMERICA" },
      { name: "Seattle", coordinates: [-122.3321, 47.6062], region: "NORTH AMERICA" },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749], region: "NORTH AMERICA" },
      { name: "Los Angeles", coordinates: [-118.2437, 34.0522], region: "NORTH AMERICA" },
      { name: "Austin", coordinates: [-97.7431, 30.2672], region: "NORTH AMERICA" },
      { name: "Chicago", coordinates: [-87.6298, 41.8781], region: "NORTH AMERICA" },
      { name: "New York", coordinates: [-74.0060, 40.7128], region: "NORTH AMERICA" },
      { name: "Montreal", coordinates: [-73.5674, 45.5017], region: "NORTH AMERICA" },
      
      // Europe
      { name: "London", coordinates: [-0.1278, 51.5074], region: "EUROPE" },
      { name: "Paris", coordinates: [2.3522, 48.8566], region: "EUROPE" },
      { name: "Berlin", coordinates: [13.4050, 52.5200], region: "EUROPE" },
      { name: "Stockholm", coordinates: [18.0686, 59.3293], region: "EUROPE" },
      { name: "Barcelona", coordinates: [2.1734, 41.3851], region: "EUROPE" },
      { name: "Amsterdam", coordinates: [4.8952, 52.3702], region: "EUROPE" },
      
      // Asia
      { name: "Tokyo", coordinates: [139.6917, 35.6895], region: "ASIA" },
      { name: "Seoul", coordinates: [126.9780, 37.5665], region: "ASIA" },
      { name: "Shanghai", coordinates: [121.4737, 31.2304], region: "ASIA" },
      { name: "Singapore", coordinates: [103.8198, 1.3521], region: "ASIA" },
      { name: "Bangalore", coordinates: [77.5946, 12.9716], region: "ASIA" },
      { name: "Sydney", coordinates: [151.2093, -33.8688], region: "ASIA" }
    ]
  },
  'NORTH AMERICA': {
    scale: 300,
    center: [-100, 40],
    studios: [
      { name: "Vancouver", coordinates: [-123.1207, 49.2827] },
      { name: "Seattle", coordinates: [-122.3321, 47.6062] },
      { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
      { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
      { name: "Austin", coordinates: [-97.7431, 30.2672] },
      { name: "Chicago", coordinates: [-87.6298, 41.8781] },
      { name: "New York", coordinates: [-74.0060, 40.7128] },
      { name: "Montreal", coordinates: [-73.5674, 45.5017] }
    ]
  },
  'EUROPE': {
    scale: 400,
    center: [15, 50],
    studios: [
      { name: "London", coordinates: [-0.1278, 51.5074] },
      { name: "Paris", coordinates: [2.3522, 48.8566] },
      { name: "Berlin", coordinates: [13.4050, 52.5200] },
      { name: "Stockholm", coordinates: [18.0686, 59.3293] },
      { name: "Barcelona", coordinates: [2.1734, 41.3851] },
      { name: "Amsterdam", coordinates: [4.8952, 52.3702] }
    ]
  },
  'ASIA': {
    scale: 300,
    center: [100, 30],
    studios: [
      { name: "Tokyo", coordinates: [139.6917, 35.6895] },
      { name: "Seoul", coordinates: [126.9780, 37.5665] },
      { name: "Shanghai", coordinates: [121.4737, 31.2304] },
      { name: "Singapore", coordinates: [103.8198, 1.3521] },
      { name: "Bangalore", coordinates: [77.5946, 12.9716] },
      { name: "Sydney", coordinates: [151.2093, -33.8688] }
    ]
  }
};

const Map = () => {
  const [activeRegion, setActiveRegion] = useState('ALL');
  const currentConfig = regionConfigs[activeRegion];

  return (
    <div className="bg-transparent bg-[linear-gradient(180deg,_#0D0E0F_0%,_#25282A_100%)] text-white min-h-screen py-16 px-4">
      {/* Inject the shine animation styles */}
      <style>{shineAnimation}</style>
      
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 font-primary">GLOBAL PRESENCE</h1>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Access our distributed network of studios and tap into our global talent and expertise.
        </p>

        {/* Region Filter */}
        <div className="flex justify-center gap-4 mb-12 text-lg">
          {Object.keys(regionConfigs).map((region, index) => (
            <React.Fragment key={region}>
              <button
                className={`${activeRegion === region ? 'text-white font-bold' : 'text-gray-400'}`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
              {index < Object.keys(regionConfigs).length - 1 && <span className="text-gray-400">/</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Map Container with Background Image */}
        <div 
          className="border-2 border-gray-700 rounded-lg overflow-hidden relative"
          style={{
            backgroundImage: `url(${mapImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '700px'
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
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
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(4, 82, 107, 0.5)"
                      onClick={() => setActiveRegion(geo.properties.REGION)}
                      stroke="rgba(51, 65, 85, 0.8)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: 'rgba(15, 23, 42, 0.7)' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Shining orange markers - now with more studios */}
              {currentConfig.studios.map((studio) => (
                <Marker key={`${studio.name}-${studio.coordinates.join(',')}`} coordinates={studio.coordinates}>
                  <g>
                    <circle
                      r={8}
                      fill="#DC7D28"
                      stroke="#FFF"
                      strokeWidth={1}
                      style={{
                        animation: 'shine 2s infinite ease-in-out',
                      }}
                      data-tip={studio.name}
                    />
                    <circle
                      r={4}
                      fill="#DC7D28"
                      style={{
                        filter: 'brightness(1.2)',
                      }}
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