import React from 'react';

const Partners = () => {
  const partnerLogos = [
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/ea.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/eidos-montreal.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/frontier.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/guerrilla.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/harmonix.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/light-magic.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/ubisoft.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/08/t2.webp',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/disney.png',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/daybreak.png',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/crystal-dynamics.png',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/capcom.png',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/bethesda.png',
    'https://www.virtuosgames.com/wp-content/uploads/2024/11/activision-bliszzard.png',
  ];

  return (
    <div className="w-full bg-gray-900 text-white py-16">

      {/* First Row: Moving Right */}
      <div className="overflow-hidden mb-8">
        <div className="item-wrap flex animate-marquee-right">
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <div key={`row1-${index}`} className="item mx-4">
              <img
                decoding="async"
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row: Moving Left */}
      <div className="overflow-hidden">
        <div className="item-wrap flex animate-marquee-left">
          {partnerLogos.concat(partnerLogos).map((logo, index) => (
            <div key={`row2-${index}`} className="item mx-4">
              <img
                decoding="async"
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        .item-wrap {
          white-space: nowrap;
          width: 100%;
        }

        .item {
          display: inline-block;
        }

        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;