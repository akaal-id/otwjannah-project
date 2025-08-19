"use client";
import React, { useState } from "react";

const FEATURES = [
  "Membangkitkan kesadaran jiwa tentang fana-nya kehidupan dunia",
  "Menyelaraskan prioritas hidup dengan apa yang benar-benar bernilai di sisi Allah",
  "Membekali diri dengan pola pikir untuk mengubah setiap momen menjadi ibadah",
  "Menghubungkanmu dengan saudara seiman yang sedang menapaki jalan yang sama",
];

const Card: React.FC<{
  title: string;
  body: string;
}> = ({ title, body }) => (
  <div className="px-6 py-12 bg-transparent rounded-xl flex flex-col items-center border border-[#e2b86a]/24 hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <span className="block w-12 h-12 rounded-full bg-[#e2b86a] mb-6" />
    <p className="text-[#C3BEA1] text-2xl md:text-xl font-bold leading-snug text-center">
      {title}
      <br />
      <span className="text-[#C3BEA1] font-normal text-sm md:text-base leading-snug block mt-4">{body}</span>
    </p>
  </div>
);

const tributes = [
  { 
    name: 'Muhammad Harits', 
    desc: '',
    image: '/images/harits.jpg' // Ganti dengan path gambar yang sesuai
  },
  { 
    name: 'Badi Uzzamman', 
    desc: '',
    image: '/images/badi.jpg' // Ganti dengan path gambar yang sesuai
  },
  { 
    name: 'M. Naufal Harits', 
    desc: '',
    image: '/images/n_harits.jpg' // Ganti dengan path gambar yang sesuai
  },
];

const Tribute: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Klik lagi pada card yang sama akan nonaktifkan highlight
    } else {
      setActiveIndex(index); // Set card yang diklik sebagai aktif
    }
  };

  return (
    <div className="max-w-5xl w-full text-center z-10 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-normal mb-10 text-[#e2b86a] drop-shadow-lg tracking-tight">
        Untuk Mereka Para <span className="text-white font-bold">Pemakmur Masjid</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-stretch">
        {tributes.map((t, index) => (
          <div 
            key={index} 
            className={`relative h-96 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
              activeIndex === index 
                ? 'scale-105 shadow-2xl ring-4 ring-[#e2b86a] ring-opacity-80' 
                : activeIndex !== null 
                  ? 'grayscale brightness-50 scale-95' 
                  : 'grayscale-0 brightness-100'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {/* Gambar dengan rasio 4:5 */}
            <div className="absolute inset-0">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              {/* Overlay gradient untuk teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            {/* Konten teks */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
              activeIndex === index ? 'translate-y-0' : 'translate-y-2'
            }`}>
              <h3 className="text-2xl font-bold mb-2">{t.name}</h3>
              <p className="text-sm opacity-90">{t.desc}</p>
            </div>
            
            {/* Icon dove yang muncul saat dihover/diklik */}
            <div className={`absolute top-4 right-4 w-10 h-10 bg-[#e2b86a] rounded-full flex items-center justify-center text-black transition-all duration-300 ${
              activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              🕊️
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 mb-24">
      <Tribute />
      <h2 className="text-3xl md:text-4xl font-semibold text-[#e2b86a] mt-12 mb-12 leading-tight text-center w-full">
        Agenda Perjalanan <span className="text-white font-bold">OTW Jannah</span>
      </h2>

      {/* Highlighted transformasi text */}
      <div className="w-full text-center mt-16 mb-8">
        <p className="text-lg md:text-2xl text-white font-semibold">
          <span className="text-[#e2b86a]">On The Way to Jannah</span> adalah pengalaman <span className="text-[#e2b86a]">transformatif</span> yang dirancang untuk:
        </p>
      </div>

      {/* Features list */}
      <div className="features-grid grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-2 max-w-6xl mx-auto">
        {FEATURES.map((item, idx) => (
          <div key={idx} className="feature-item flex flex-col items-center md:items-start hover:-translate-y-2 transition-transform duration-300">
            <span className="feature-number text-[#e2b86a] text-4xl font-semibold mb-2">{String(idx + 1).padStart(2, "0")}</span>
            <p className="text-[#C3BEA1] text-sm md:text-base leading-snug text-center md:text-left">{item}</p>
          </div>
        ))}
      </div>

      {/* Theme highlight */}
      <div className="theme-highlight flex flex-col items-center mt-0 md:mt-16 max-w-6xl mx-auto">
        <img src="/images/logo-tema.png" alt="logo tema" className="mb-4 w-auto min-h-[180px] md:min-h-[240px] max-h-[300px] object-contain" />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          <Card
            title="Masa muda adalah modal terbesarmu"
            body="Amal baik yang kau tanam sekarang akan tumbuh menjadi pohon pahala yang terus berbuah"
          />
          <Card
            title="Kebaikan sejak muda akan bertahan seumur hidup"
            body="Mulailah bangun hubungan dengan Allah hari ini, dan itu akan menguatkanmu selamanya"
          />
          <Card
            title="Kisah terbaik dimulai di masa muda"
            body="Amal baik yang kau tanam sekarang akan tumbuh menjadi pohon pahala yang terus berbuah"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section flex flex-col items-center gap-4 mt-16 max-w-4xl mx-auto">
        <p className="text-[#C3BEA1] text-sm md:text-base w-full text-center">
          Ini adalah undanganmu untuk keluar dari kehidupan otomatis menuju ibadah yang penuh kesadaran.
          <br className="hidden md:block" /> Jalan menuju Jannah dimulai dengan satu langkah sadar.
        </p>

        <div className="w-full text-center mb-12 mt-8">
          <span className="text-2xl md:text-2xl text-white font-semibold">
            <span className="text-[#e2b86a]">Sudah Siap</span> mengambil langkah <span className="text-[#e2b86a]">pertama-mu?</span>
          </span>
        </div>
        
        <div className="w-full text-center">
          <a
            href="https://hegira-1-5.vercel.app"
            target="_blank"
            rel="noopener"
            className="inline-block px-6 py-2 rounded-md text-lg font-semibold text-white whitespace-nowrap shadow-md hover:scale-105 transition-transform duration-200"
            style={{ background: "linear-gradient(90deg, #cea15c 0%, #ffd992 50%, #703f23 100%)" }}
          >
            Beli Tiket Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;