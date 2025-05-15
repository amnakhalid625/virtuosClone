import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import mapImage from '../assets/images/mapbg.png';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Map = () => {
  return (
    <section style={{ 
      backgroundImage: `url(${mapImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ width: '100%', height: '100vh' }}>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </section>
  );
};

export default Map;