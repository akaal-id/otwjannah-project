import React from 'react';

const tributes = [
  { name: 'Ais', desc: 'wajah ceria, pejuang dakwah' },
  { name: 'Badi', desc: 'penjaga shalat, sahabat setia' },
  { name: 'Harits', desc: 'tenang dan tulus, telah lebih dulu pulang' },
];

const Tribute = () => (
  <section className="relative py-20 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full text-center z-10">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-[#6EA8AB] drop-shadow-lg tracking-tight uppercase">
        Untuk Mereka yang Telah Mendahului
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
        {tributes.map((t, i) => (
          <div key={i} className="bg-[#181f1b] rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-[#222] hover:scale-105 transition-transform duration-300">
            <div className="w-24 h-24 bg-[#6EA8AB] rounded-full mb-4 flex items-center justify-center text-4xl text-[#0a0a0a] shadow-lg">🕊️</div>
            <span className="font-bold text-[#C3BEA1] mb-2 text-xl">{t.name}</span>
            <span className="text-[#C3BEA1] text-lg font-medium">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tribute;