import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import duneImg from '../assets/images/dune.png';
import darkSoulImg from '../assets/images/dark_souls.png';
import virtousBtn from '../assets/images/virtous-btn.png';
import judasImg from '../assets/images/judas.png';
import portfolioImg from '../assets/images/portfolio.webp';
import stellerImg from '../assets/images/stellar_blade.png';
import leagueoImg from '../assets/images/leagueo.png';

const Services = () => {
    const [activeTab, setActiveTab] = useState('game');

    const tabs = [
        { key: 'game', label: 'Game Development' },
        { key: 'engineering', label: 'Engineering' },
        { key: 'art', label: 'Art Production' },
    ];

    const iconWithLabel = (icon, label) => (
        <div className="flex items-center space-x-2 text-gray-400">
            {icon}
            <p className="text-sm">{label}</p>
        </div>
    );

    const ImageWithOverlay = ({ src, alt, client }) => (
        <div className="relative rounded-lg overflow-hidden h-full">
            <div className="relative w-full h-full">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04526b] via-[rgba(37,40,42,0.5)] to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{client}</p>
            </div>
        </div>
    );

    return (
        <section className="bg-[#25282A] text-white py-16 px-4 min-h-screen">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-10 ml-20 uppercase font-primary">
                Our Services
            </h1>

            {/* Tabs */}
            <div className="flex justify-center mb-10 space-x-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`relative text-lg font-semibold uppercase tracking-widest transition-all duration-300 ${
                            activeTab === tab.key ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.key && (
                            <div className="absolute bottom-[-10px] left-0 h-0.5 w-full bg-white rounded-full"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'game' && (
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="mySwiper px-10"
                >
                    <SwiperSlide>
                        <div className="p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 font-secondary max-w-8xl mx-auto">
                            {/* Description + Features */}
                            <div className="ml-20 flex justify-center align-center flex-col">
                                <h4 className="text-2xl font-bold mb-4 uppercase">Game Development</h4>
                                <p className="mb-4 w-3/4 text-gray-400">
                                    Tap on our co-development services, including level design, gameplay design, remakes, and adaptations.
                                </p>

                                <div className="space-y-3 text-sm">
                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path d="M12 2v2" />
                                            <path d="M12 22v-2" />
                                            <path d="m17 20.66-1-1.73" />
                                            <path d="M11 10.27 7 3.34" />
                                            <path d="m20.66 17-1.73-1" />
                                            <path d="m3.34 7 1.73 1" />
                                            <path d="M14 12h8" />
                                            <path d="M2 12h2" />
                                            <path d="m20.66 7-1.73 1" />
                                            <path d="m3.34 17 1.73-1" />
                                            <path d="m17 3.34-1 1.73" />
                                            <path d="m11 13.73-4 6.93" />
                                        </svg>,
                                        'Adaptation'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                        </svg>,
                                        'Post Launch Content'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <line x1="6" x2="10" y1="11" y2="11" />
                                            <line x1="8" x2="8" y1="9" y2="13" />
                                            <line x1="15" x2="15.01" y1="12" y2="12" />
                                            <line x1="18" x2="18.01" y1="10" y2="10" />
                                            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                                        </svg>,
                                        'Gameplay & Design'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 2v2" />
                                            <path d="M12 22v-2" />
                                            <path d="m17 20.66-1-1.73" />
                                            <path d="M11 10.27 7 3.34" />
                                            <path d="m20.66 17-1.73-1" />
                                        </svg>,
                                        'AI/ML Integration'
                                    )}
                                </div>

                                <p className="mt-4 text-gray-400">Game & IP Development</p>
                                <div
                                    className="mt-6 relative inline-block"
                                    style={{
                                        backgroundImage: `url(${virtousBtn})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '150px',
                                        height: '50px',
                                    }}
                                >
                                    <span
                                        className="absolute inset-0 flex items-center justify-center text-white text-sm uppercase font-semibold tracking-wide"
                                        style={{
                                            background: 'linear-gradient(to right, rgba(255, 69, 0, 0.7), transparent)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        EXPLORE MORE
                                    </span>
                                </div>
                            </div>

                            {/* Images with overlays */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                <ImageWithOverlay src={duneImg} alt="Dune" client="Funcom" />
                                <ImageWithOverlay
                                    src={darkSoulImg}
                                    alt="Dark Souls"
                                    client="Bandai Namco Entertainment"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}

            {activeTab === 'engineering' && (
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="mySwiper px-10"
                >
                    <SwiperSlide>
                        <div className="p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 font-secondary">
                            <div className="ml-20 flex justify-center align-center flex-col">
                                <h4 className="text-2xl font-bold mb-4 uppercase">Engineering</h4>
                                <p className="mb-4 w-3/4 text-gray-400">
                                    Address technical challenges in your development with cutting-edge tools, or refine gameplay, user interfaces, and engines.
                                </p>

                                <div className="space-y-3 text-sm">
                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path d="M12 2v2" />
                                            <path d="M12 22v-2" />
                                            <path d="m17 20.66-1-1.73" />
                                            <path d="M11 10.27 7 3.34" />
                                            <path d="m20.66 17-1.73-1" />
                                            <path d="m3.34 7 1.73 1" />
                                            <path d="M14 12h8" />
                                            <path d="M2 12h2" />
                                            <path d="m20.66 7-1.73 1" />
                                            <path d="m3.34 17 1.73-1" />
                                            <path d="m17 3.34-1 1.73" />
                                            <path d="m11 13.73-4 6.93" />
                                        </svg>,
                                        'Adaptation'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                        </svg>,
                                        'Post Launch Content'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <line x1="6" x2="10" y1="11" y2="11" />
                                            <line x1="8" x2="8" y1="9" y2="13" />
                                            <line x1="15" x2="15.01" y1="12" y2="12" />
                                            <line x1="18" x2="18.01" y1="10" y2="10" />
                                            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
                                        </svg>,
                                        'Gameplay & Design'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 2v2" />
                                            <path d="M12 22v-2" />
                                            <path d="m17 20.66-1-1.73" />
                                            <path d="M11 10.27 7 3.34" />
                                            <path d="m20.66 17-1.73-1" />
                                        </svg>,
                                        'AI/ML Integration'
                                    )}
                                </div>

                                <p className="mt-4 text-gray-400">Game & IP Development</p>
                                <div
                                    className="mt-6 relative inline-block"
                                    style={{
                                        backgroundImage: `url(${virtousBtn})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '150px',
                                        height: '50px',
                                    }}
                                >
                                    <span
                                        className="absolute inset-0 flex items-center justify-center text-white text-sm uppercase font-semibold tracking-wide"
                                        style={{
                                            background: 'linear-gradient(to right, rgba(255, 69, 0, 0.7), transparent)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        EXPLORE MORE
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                <ImageWithOverlay src={judasImg} alt="Judas" client="2K Games" />
                                <ImageWithOverlay
                                    src={portfolioImg}
                                    alt="Portfolio"
                                    client="Private Client"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}

            {activeTab === 'art' && (
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="mySwiper px-10"
                >
                    <SwiperSlide>
                        <div className="p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 font-secondary">
                            <div className="ml-20 flex justify-center align-center flex-col">
                                <h4 className="text-2xl font-bold mb-4 uppercase">Art Production</h4>
                                <p className="mb-4 w-3/4 text-gray-400">
                                    Realize your vision through concept art, or leverage the talent of art specialists as we deliver high-quality assets—and more—across your production pipeline.
                                </p>

                                <div className="space-y-3 text-sm">
                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path d="M12 2v2" />
                                            <path d="M12 22v-2" />
                                            <path d="m17 20.66-1-1.73" />
                                            <path d="M11 10.27 7 3.34" />
                                            <path d="m20.66 17-1.73-1" />
                                            <path d="m3.34 7 1.73 1" />
                                            <path d="M14 12h8" />
                                            <path d="M2 12h2" />
                                            <path d="m20.66 7-1.73 1" />
                                            <path d="m3.34 17 1.73-1" />
                                            <path d="m17 3.34-1 1.73" />
                                            <path d="m11 13.73-4 6.93" />
                                        </svg>,
                                        'Concept Art'
                                    )}

                                    {iconWithLabel(
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                        </svg>,
                                        '3D Modeling'
                                    )}
                                </div>

                                <p className="mt-4 text-gray-400">Game & IP Development</p>
                                <div
                                    className="mt-6 relative inline-block"
                                    style={{
                                        backgroundImage: `url(${virtousBtn})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '150px',
                                        height: '50px',
                                    }}
                                >
                                    <span
                                        className="absolute inset-0 flex items-center justify-center text-white text-sm uppercase font-semibold tracking-wide"
                                        style={{
                                            background: 'linear-gradient(to right, rgba(255, 69, 0, 0.7), transparent)',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        EXPLORE MORE
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                <ImageWithOverlay
                                    src={stellerImg}
                                    alt="Stellar Blade"
                                    client="Shift Up"
                                />
                                <ImageWithOverlay
                                    src={leagueoImg}
                                    alt="League of Legends"
                                    client="Riot Games"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}
        </section>
    );
};

export default Services;