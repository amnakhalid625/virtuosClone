import dinasor from '../assets/images/dinasor.jpg';
import homeoverlay from '../assets/images/home-hero-btm-overlay.webp';

const About = () => {
  return (
    <section
      id="scroll"
      className="relative w-full bg-cover bg-center bg-no-repeat text-white overflow-x-hidden"
      style={{
        backgroundImage: `url(${dinasor})`,
        minHeight: '100vh', 
      }}
    >
      {/* Overlay Image */}
      <img
        src={homeoverlay}
        alt="Overlay"
        className="absolute bottom-0 left-0 w-full h-auto z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-4 md:px-6 lg:min-h-[200vh] bg-black bg-opacity-40">
        <div className="w-full max-w-6xl mx-auto md:mx-4 md:ml-20 pt-20 md:pt-0 md:mt-[-400px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold mb-4 md:mb-6 leading-tight uppercase font-primary">
            Building Worlds <br /> That Inspire
          </h1>

          <p className="w-full max-w-xl mb-6 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed font-secondary">
            Founded in 2004 and headquartered in Singapore with over{' '}
            <br className="hidden md:block" />
            4200 employees across 25 offices in Asia, Europe, and North{' '}
            <br className="hidden md:block" />
            America, Virtuos is one of the largest independent video game{' '}
            <br className="hidden md:block" />
            development companies. Specializing in full-cycle game{' '}
            <br className="hidden md:block" />
            development and art production, we have delivered high-{' '}
            <br className="hidden md:block" />
            quality content for over 1500 games across all platforms,{' '}
            <br className="hidden md:block" />
            working with 23 of the top 25 gaming companies worldwide.
          </p>

          {/* Stats Section */}
          <div className="w-full md:w-auto mt-8 md:mt-12 lg:mt-24 flex flex-wrap justify-between gap-2 sm:gap-4 md:gap-6 font-primary rounded-lg p-3 md:p-6 md:absolute md:left-auto md:transform-none md:max-w-9xl">
            {[
              { label: 'People', value: '4200+' },
              { label: 'Locations', value: '25' },
              { label: 'Clients', value: '900+' },
              { label: 'Years', value: '21' },
              { label: 'Titles', value: '1500+' },
            ].map((item, index) => (
              <div key={index} className="text-center flex-1 min-w-[28%] sm:min-w-[30%] md:min-w-[180px] lg:min-w-[230px]">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 font-primary">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm uppercase mt-1 md:mt-2 font-secondary">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;