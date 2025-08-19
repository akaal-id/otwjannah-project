"use client";
import React, { useState } from 'react';

const speakers = [
  { 
    name: 'Ust. Muzammil Hasballah', 
    title: 'Pendakwah, Aktivis Muda, dan Influencer',
    img: '/images/muzammil.png' // Ganti dengan path gambar yang sesuai
  },
  { 
    name: 'Ust. Faiz Zanad', 
    title: 'Founder @Taubatter',
    img: '/images/faiz.png' // Ganti dengan path gambar yang sesuai
  },
  { 
    name: 'Raden C. Hanif', 
    title: 'Moderator & Public Speaker',
    img: '/images/hanif.png' // Ganti dengan path gambar yang sesuai
  },
];

const Speakers = () => {
  const [activeSpeaker, setActiveSpeaker] = useState<number | null>(null);

  const handleSpeakerClick = (index: number) => {
    if (activeSpeaker === index) {
      setActiveSpeaker(null); // Klik lagi pada speaker yang sama akan nonaktifkan highlight
    } else {
      setActiveSpeaker(index); // Set speaker yang diklik sebagai aktif
    }
  };

  return (
    <section id="speakers" className="py-20 px-4 text-center bg-[#0a0a0a]">
      <h2 className="text-3xl md:text-4xl font-normal mb-16 text-[#e2b86a]">Insya Allah dengan<span className="font-bold text-white"> pembicara yang menginspirasi</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className="relative group flex flex-col items-center cursor-pointer"
            onClick={() => handleSpeakerClick(index)}
          >
          {/* Container tanpa efek breathing */}
          <div className={`relative w-full md:w-96 h-auto overflow-hidden mb-6 transition-all duration-700 ease-in-out ${
          activeSpeaker === index 
             ? 'scale-101' 
            : activeSpeaker !== null 
                ? 'grayscale brightness-50 scale-100' 
                  : 'grayscale-0 brightness-100'
            }`}>
              {/* Gradient emas di belakang foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#e2b86a] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Foto pembicara */}
              <img 
                src={speaker.img} 
                alt={speaker.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay saat aktif */}
              {activeSpeaker === index && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#e2b86a] to-transparent opacity-80"></div>
              )}
            </div>
            
            {/* Nama pembicara */}
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              activeSpeaker === index ? 'text-[#e2b86a]' : 'text-[#C3BEA1]'
            }`}>
              {speaker.name}
            </h3>
            
            {/* Gelar pembicara */}
            <p className="text-[#C3BEA1] text-sm opacity-80">{speaker.title}</p>
          </div>
        ))}
      </div>
      
      {/* Styles untuk efek breathing */}
      <style jsx>{`
        @keyframes breathing {
          0% { transform: scale(0.98); }
          50% { transform: scale(1.02); }
          100% { transform: scale(0.98); }
        }
        .animate-breathing {
          animation: breathing 4s ease-in-out infinite;
        }
        .group:hover .animate-breathing {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Speakers;