import React, { useState } from 'react';
import thumbnail from '../assets/images/videoThumbnail.webp';
import { X } from 'lucide-react';

export const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-bg') closeModal();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#25282A] px-4">
      {/* Thumbnail with Play Button */}
      <div className="relative w-full max-w-3xl rounded-xl overflow-hidden border-none lg:border-2 lg:border-gray-700">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-auto object-cover"
        />
        <button
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center focus:outline-none group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-gray-500 bg-white bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white group-hover:scale-110 transform transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          id="modal-bg"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 backdrop-blur-sm animate-fadeIn"
        >
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={28} />
            </button>

            {/* YouTube Embed */}
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
