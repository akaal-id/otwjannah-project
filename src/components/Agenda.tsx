"use client";

import React, { useState } from 'react';

const Agenda = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const agendaData = [
    {
      title: "Pemutaran Film Inspiratif",
      description: "Saksikan keteladanan 3 pemuda pejuang dakwah yang wafatnya diiringi doa ribuan orang",
      icon: "film",
    },
    {
      title: "Malam Renungan",
      description: "Dapatkan wejangan ilmu dari Ustadz Muzammil Hazballah dan Ust. Faiz Sanad",
      icon: "moon",
    },
    {
      title: "Khataman Al-Qur'an",
      description: "Ramahkan suasana dengan menyempurnakan bacaan, masing-masing 4 halaman",
      icon: "book",
    },
    {
      title: "Tausiyah Penyejuk Hati",
      description: "Nasihat penuh hikmah yang menenangkan jiwa",
      icon: "mic",
    },
    {
      title: "Mobilisasi Semangat Dakwah",
      description: "Tutup acara dengan motivasi membara untuk konsisten berkontribusi di jalan dakwah",
      icon: "megaphone",
    },
  ];

  const handleTabClick = (index: number) => setActiveTab(index);

  const Icon = ({ name, active }: { name: string; active: boolean }) => {
    const common = "w-6 h-6";
    const stroke = active ? "stroke-white" : "stroke-[#e2b86a]";
    switch (name) {
      case "film":
        return (
          <svg className={`${common} ${stroke}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.5" />
            <path d="M3 10h18" strokeWidth="1.5" />
          </svg>
        );
      case "moon":
        return (
          <svg className={`${common} ${stroke}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="1.5" />
          </svg>
        );
      case "book":
        return (
          <svg className={`${common} ${stroke}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7a2 2 0 012-2h14v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" strokeWidth="1.5" />
            <path d="M7 7v10" strokeWidth="1.5" />
          </svg>
        );
      case "mic":
        return (
          <svg className={`${common} ${stroke}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14a3 3 0 003-3V7a3 3 0 10-6 0v4a3 3 0 003 3z" strokeWidth="1.5" />
            <path d="M19 11v1a7 7 0 01-14 0v-1" strokeWidth="1.5" />
          </svg>
        );
      default:
        return (
          <svg className={`${common} ${stroke}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12h18" strokeWidth="1.5" />
          </svg>
        );
    }
  };

  return (
    <section id="agenda" className="px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#e2b86a] mb-12 leading-tight text-center w-full">
        Agenda Perjalanan <span className="text-white font-bold">OTW Jannah</span>
      </h2>

      <div className="max-w-[1152px] mx-auto">
        {/* Cards layout: 3 on top row, 2 centered below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 justify-center">
          {agendaData.slice(0, 3).map((item, index) => {
            const realIndex = index;
            const isActive = activeTab === realIndex;
            return (
              <button
                key={realIndex}
                onClick={() => handleTabClick(realIndex)}
                role="tab"
                aria-selected={isActive}
                className={`relative rounded-xl p-4 flex flex-col items-start gap-3 border border-[#e2b86a]/24 overflow-hidden transition-all duration-300 text-left ${
                  isActive ? "text-white" : "text-[#C3BEA1] hover:scale-[1.02]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#703f23] to-[#0a0a0a] opacity-100" aria-hidden />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                )}

                <div className="z-10 flex flex-col items-start gap-3">
                  <span className={`flex items-center justify-center w-16 h-16 rounded-md border border-[#e2b86a]/20 ${isActive ? 'bg-white/10' : 'bg-transparent'}`}>
                    <Icon name={item.icon} active={isActive} />
                  </span>

                  <h4 className={`font-semibold text-lg leading-snug ${isActive ? 'text-white' : 'text-[#C3BEA1]'}`}>{item.title}</h4>

                  <p className="text-sm text-[#C3BEA1]/90 leading-relaxed">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 justify-center">
          {agendaData.slice(3).map((item, idx) => {
            const realIndex = idx + 3;
            const isActive = activeTab === realIndex;
            return (
              <button
                key={realIndex}
                onClick={() => handleTabClick(realIndex)}
                role="tab"
                aria-selected={isActive}
                className={`relative rounded-xl p-4 flex flex-col items-start gap-3 border border-[#e2b86a]/24 overflow-hidden transition-all duration-300 text-left ${
                  isActive ? "text-white" : "text-[#C3BEA1] hover:scale-[1.02]"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#703f23] to-[#0a0a0a] opacity-100" aria-hidden />
                )}
                {!isActive && (
                  <span className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                )}

                <div className="z-10 flex flex-col items-start gap-3">
                  <span className={`flex items-center justify-center w-16 h-16 rounded-md border border-[#e2b86a]/20 ${isActive ? 'bg-white/10' : 'bg-transparent'}`}>
                    <Icon name={item.icon} active={isActive} />
                  </span>

                  <h4 className={`font-semibold text-lg leading-snug ${isActive ? 'text-white' : 'text-[#C3BEA1]'}`}>{item.title}</h4>

                  <p className="text-sm text-[#C3BEA1]/90 leading-relaxed">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full text-center mt-12 mb-12">
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
    </section>
  );
};

export default Agenda;