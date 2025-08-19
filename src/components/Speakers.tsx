import React from 'react';

const speakers = [
  { name: 'Mystery Guest', img: '/placeholder-silhouette.svg' },
  { name: 'Ustadz Muzammil', img: '/placeholder-silhouette.svg' },
];

const Speakers = () => (
  <section id="speakers" className="py-20 px-4 text-center bg-[#0a0a0a]">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-[#C3BEA1]">Pembicara</h2>
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
      {speakers.map((s, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full flex items-center justify-center mb-3 overflow-hidden border-4 border-[#6EA8AB] shadow-lg">
            {/* Placeholder for silhouette/blurred image */}
            <img src={s.img} alt={s.name} className="w-full h-full object-cover opacity-60" />
          </div>
          <span className="font-semibold text-[#C3BEA1] text-lg">{s.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Speakers;
