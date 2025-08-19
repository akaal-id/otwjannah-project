import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#0a0a0a] text-[#C3BEA1] py-12 px-4 md:px-8 font-sans border-t border-[#222]">
    <div className="max-w-6xl mx-auto">
      {/* Grid Layout 1:3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
        
        {/* Kolom 1: Logo dan Alamat */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/images/main-logo.png" 
            alt="On The Way to Jannah Logo" 
            className="h-16 w-auto mb-4"
          />
          <a 
            href="https://maps.google.com/?q=Venue+On+The+Way+to+Jannah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-[#C3BEA1] hover:text-[#e2b86a] transition-colors duration-200 text-center md:text-left mb-2"
          >
            📍 Venue On The Way to Jannah
          </a>
          <p className="text-xs text-[#C3BEA1]/70 text-center md:text-left">
            Jalan Menuju Kebaikan dan Keberkahan
          </p>
        </div>
        
        {/* Kolom 2: Menu Navigasi */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#e2b86a] mb-4">Navigasi</h3>
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <a href="#home" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Home</a>
            <a href="#about" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Tentang Kami</a>
            <a href="#agenda" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Agenda</a>
            <a href="#speakers" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Pembicara</a>
            <a href="#venue" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Lokasi</a>
            <a href="#sponsors" className="text-sm hover:text-[#e2b86a] transition-colors duration-200">Sponsorship</a>
          </div>
        </div>
        
        {/* Kolom 3: Hubungi Kami */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#e2b86a] mb-4">Hubungi Kami</h3>
          <div className="flex flex-col space-y-3 text-center md:text-left">
            {/* Instagram */}
            <div className="flex flex-col">
              <span className="text-sm font-medium mb-1">Instagram:</span>
              <div className="flex flex-col space-y-1">
                <a 
                  href="https://instagram.com/rismada.official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs hover:text-[#e2b86a] transition-colors duration-200"
                >
                  @rismada.official
                </a>
                <a 
                  href="https://instagram.com/badar_gta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs hover:text-[#e2b86a] transition-colors duration-200"
                >
                  @badar_gta
                </a>
              </div>
            </div>
            
            {/* TikTok */}
            <div className="flex flex-col">
              <span className="text-sm font-medium mb-1">TikTok:</span>
              <a 
                href="https://tiktok.com/@rismada.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs hover:text-[#e2b86a] transition-colors duration-200"
              >
                @rismada.id
              </a>
            </div>
            
            {/* WhatsApp */}
            <div className="flex flex-col">
              <span className="text-sm font-medium mb-1">WhatsApp:</span>
              <a 
                href="https://wa.me/6285183170851" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs hover:text-[#e2b86a] transition-colors duration-200"
              >
                +62 851 8317 0851
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-[#333] pt-6 text-center">
        <p className="text-xs text-[#C3BEA1]/70">
          ©️ 2025 On The Way to Jannah. Semua hak dilindungi.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;