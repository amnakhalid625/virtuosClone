import React from 'react';

const Partners = () => {
  // Arrays of partner logo URLs extracted from the provided HTML
  const partnerLogos1 = [
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

  const partnerLogos2 = [
    '/wp-content/uploads/2024/11/2k.png',
    '/wp-content/uploads/2024/11/amazon.png',
    '/wp-content/uploads/2024/11/arkane.png',
    '/wp-content/uploads/2024/11/avalanche.png',
    '/wp-content/uploads/2024/11/konami.png',
    '/wp-content/uploads/2024/11/naughty-dog.png',
    '/wp-content/uploads/2024/11/sony.png',
    '/wp-content/uploads/2024/11/quantic-dream.png',
    '/wp-content/uploads/2024/11/smilegate.png',
    '/wp-content/uploads/2024/11/tencent.png',
    '/wp-content/uploads/2024/11/treyarch.png',
    '/wp-content/uploads/2024/11/wb.png',
    '/wp-content/uploads/2024/11/xbox.png',
    '/wp-content/uploads/2024/11/zynga.png',
  ];

  return (
    <div className="bg-[#25282A] py-40 px-0" style={{ '--padding-top': '40px', '--padding-bottom': '100px' }}>
      <div className="max-w-[1280px] mx-auto flex flex-row flex-wrap justify-center">
        {/* First Marquee Row */}
        <div className="middle-service-marquee overflow-hidden relative w-full" id="middle-service-marquee">
          <div className="item-wrap flex gap-4" style={{ width: '400%', transform: 'translateX(0px)', whiteSpace: 'nowrap' }}>
            {partnerLogos1.concat(partnerLogos1).map((logo, index) => (
              <div key={`row1-${index}`} className="item flex-1 flex justify-center items-center">
                <img
                  decoding="async"
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-[100px] object-contain transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
          <div className="before:block before:absolute before:left-0 before:top-0 before:w-[100px] before:h-full before:bg-gradient-to-r from-[#25282A] via-[#25282A]/80 to-transparent before:z-10"></div>
          <div className="after:block after:absolute after:right-0 after:top-0 after:w-[100px] after:h-full after:bg-gradient-to-l from-transparent via-[#25282A]/80 to-[#25282A] after:z-10"></div>
        </div>

        {/* Second Marquee Row */}
        <div className="middle-service-marquee overflow-hidden relative w-full mt-8" id="middle-service-marquee-2">
          <div className="item-wrap flex gap-4" style={{ width: '400%', transform: 'translateX(0px)', whiteSpace: 'nowrap' }}>
            {partnerLogos2.concat(partnerLogos2).map((logo, index) => (
              <div key={`row2-${index}`} className="item flex-1 flex justify-center items-center">
                <img
                  decoding="async"
                  src={`https://www.virtuosgames.com${logo}`}
                  alt={`Partner ${index + 15}`}
                  className="w-full h-[100px] object-contain transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
          <div className="before:block before:absolute before:left-0 before:top-0 before:w-[100px] before:h-full before:bg-gradient-to-r from-[#25282A] via-[#25282A]/80 to-transparent before:z-10"></div>
          <div className="after:block after:absolute after:right-0 after:top-0 after:w-[100px] after:h-full after:bg-gradient-to-l from-transparent via-[#25282A]/80 to-[#25282A] after:z-10"></div>
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        .middle-service-marquee {
          padding-bottom: 0;
          position: relative;
        }

        .item-wrap {
          position: relative;
          animation: marquee 30s ease-in-out infinite;
        }

        #middle-service-marquee .item-wrap {
          animation-name: marquee-left;
        }

        #middle-service-marquee-2 .item-wrap {
          animation-name: marquee-right;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media only screen and (max-width: 1024px) {
          .middle-service-marquee .item-wrap {
            width: 600%;
          }
          .middle-service-marquee .before,
          .middle-service-marquee .after {
            width: 50px;
          }
        }

        @media only screen and (max-width: 767px) {
          .middle-service-marquee .item-wrap {
            width: 550%;
          }
        }

        @media only screen and (max-width: 480px) {
          .middle-service-marquee .item-wrap {
            width: 800%;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Partners;