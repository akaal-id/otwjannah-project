import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#0a0a0a] text-[#C3BEA1] py-10 px-4 flex flex-col items-center border-t border-[#222] mt-8 font-sans">
    <div className="font-bold text-2xl mb-2">On The Way to Jannah</div>
    <div className="mb-2 text-base">Organized by [insert]</div>
    <div className="flex gap-6 mb-2">
      {/* Social media icons (SVG or placeholder) */}
      <a href="#" className="hover:text-[#6EA8AB] text-xl" aria-label="Instagram">📷</a>
      <a href="#" className="hover:text-[#6EA8AB] text-xl" aria-label="WhatsApp">💬</a>
      <a href="#" className="hover:text-[#6EA8AB] text-xl" aria-label="Email">✉️</a>
    </div>
    <div className="text-xs mt-2">©️ 2025 On The Way to Jannah. Semua hak dilindungi.</div>
  </footer>
);

export default Footer;
