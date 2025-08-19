"use client";
import React from 'react';

const Sponsorship = () => (
  <section id="sponsors" className="py-20 px-4 text-center bg-transparent">
    {/* Title Section */}
    <h2 className="text-3xl md:text-5xl font-normal mb-6 text-[#e2b86a] mb-12">
      Jadilah Bagian dari <span className="text-white font-bold">Perjalanan Menuju Jannah</span>
    </h2>
    
    {/* Body Copy - Konten Menggugah */}
    <div className="max-w-4xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Bagian Kiri - Teks Pembuka */}
        <div className="text-center md:text-left">
          <p className="text-[#C3BEA1] mb-6 text-lg md:text-xl leading-relaxed">
            Setiap langkah kebaikan yang kita tanam hari ini, akan menjadi bekal yang 
            abadi di akhirat kelak. <span className="text-[#e2b86a] font-semibold">On The Way to Jannah  </span> 
            bukan sekadar event, tapi merupakan gerakan transformasi spiritual untuk 
            generasi muda muslim.
          </p>
          
          <p className="text-[#C3BEA1] mb-6 text-lg md:text-xl leading-relaxed">
            Dengan dukungan dan partisipasi Anda, kita bersama-sama dapat:
          </p>
        </div>
        
        {/* Bagian Kanan - List Benefits */}
        <div className="text-center md:text-left">
          <ul className="text-[#C3BEA1] space-y-4">
            <li className="flex items-start">
              <span className="text-[#e2b86a] text-xl mr-3 mt-1">•</span>
              <span className="flex-1">
                <span className="text-[#e2b86a] font-semibold">Membangun panggung dakwah</span> yang bermakna 
                dan penuh barokah
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#e2b86a] text-xl mr-3 mt-1">•</span>
              <span className="flex-1">
                <span className="text-[#e2b86a] font-semibold">Menyebarkan ilmu</span> yang barokah kepada 
                ratusan peserta muda
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#e2b86a] text-xl mr-3 mt-1">•</span>
              <span className="flex-1">
                <span className="text-[#e2b86a] font-semibold">Menciptakan lingkungan</span> yang kondusif 
                untuk muhasabah dan transformasi
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#e2b86a] text-xl mr-3 mt-1">•</span>
              <span className="flex-1">
                <span className="text-[#e2b86a] font-semibold">Memberikan akses</span> event berkualitas 
                bagi kaum muslimin
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <p className="text-[#C3BEA1] text-lg md:text-xl leading-relaxed font-medium mt-8">
        "Siapakah yang mau meminjamkan kepada Allah pinjaman yang baik, 
        maka Allah akan melipatgandakan (balasan) pinjaman itu untuknya, 
        dan dia akan mendapat pahala yang banyak." (QS. Al-Hadid: 11)
      </p>
    </div>
    
    {/* Organized By Section */}
    <div className="mb-12">
      <p className="text-[#C3BEA1] text-sm md:text-base uppercase tracking-wider mb-6 opacity-80">
        Diselenggarakan oleh
      </p>
      <div className="flex justify-center items-center gap-8 md:gap-16">
        {/* Logo Rismada */}
        <div className="flex items-center justify-center">
          <img 
            src="/images/rismada_white.png" 
            alt="Logo Rismada" 
            className="h-16 md:h-20 w-auto object-contain opacity-90"
          />
        </div>
        
        {/* Logo Badar */}
        <div className="flex items-center justify-center">
          <img 
            src="/images/badar_white.png" 
            alt="Logo Badar" 
            className="h-16 md:h-20 w-auto object-contain opacity-90"
          />
        </div>
      </div>
    </div>
    
    {/* CTA Button */}
    <div className="mt-8">
      <a 
        href="https://wa.me/6285183170851?text=Assalamu'alaikum,%20saya%20ingin%20berpartisipasi%20sebagai%20donatur%20untuk%20event%20On%20The%20Way%20to%20Jannah" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block text-white px-12 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
        style={{ background: "linear-gradient(90deg, #cea15c 0%, #ffd992 50%, #703f23 100%)" }}
      >
        Donasi Sekarang
      </a>
    </div>
  </section>
);

export default Sponsorship;