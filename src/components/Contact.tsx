import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 px-4 text-center bg-[#0a0a0a]">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-[#C3BEA1]">Hubungi Kami</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className="bg-[#1a2320] rounded-2xl shadow-xl p-8 min-w-[220px] flex flex-col items-center">
        <span className="font-semibold text-[#C3BEA1] text-lg">WhatsApp</span>
        <span className="block text-[#6EA8AB] mt-2 text-base">+62 812-XXXX-XXXX</span>
      </div>
      <div className="bg-[#1a2320] rounded-2xl shadow-xl p-8 min-w-[220px] flex flex-col items-center">
        <span className="font-semibold text-[#C3BEA1] text-lg">Email</span>
        <span className="block text-[#6EA8AB] mt-2 text-base">info@otwjannah.com</span>
      </div>
      <div className="bg-[#1a2320] rounded-2xl shadow-xl p-8 min-w-[220px] flex flex-col items-center">
        <span className="font-semibold text-[#C3BEA1] text-lg">Instagram</span>
        <span className="block text-[#6EA8AB] mt-2 text-base">@otwjannah</span>
      </div>
    </div>
  </section>
);

export default Contact;
