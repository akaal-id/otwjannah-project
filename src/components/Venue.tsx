'use client'

import React from 'react';

const Venue = () => {
    const venueName = "Masjid Jami' Al Huda, Kelapa Dua, Depok";
    const venueAddress = "Masjid Jami' Al Huda, Komplek Timah Kelapa Dua, Jalan Tugu Raya, Tugu, Cimanggis, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16951";
    const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venueAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueAddress)}`;

    return (
      <section id="venue" className="w-full relative py-36 bg-transparent">
        <div className="absolute inset-0">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdnHF4mc7ITC4pxF6X4e0uI9gAVIABisU2c-v-SQeQ1Iga8zY7Qik3zNq7vHCSVH7_TflHzK-q8cKXQSQ2zQQa1XyvKb_9V95WHDR2OY1rH3mknfwjQLzO1yv56dekiyu_eXf5sbX6_nCr/s1600/IMG20180101121549.jpg" className="w-full h-full object-cover opacity-20" alt="Audience"/>
        </div>
    <div className="w-full max-w-[1152px] px-12 relative z-10 flex justify-center items-center mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-5 w-full">
               <div className="md:col-span-2">
                   <iframe
                       className="w-full h-full min-h-[240px] md:min-h-0 border-0"
                       src={googleMapsEmbedUrl}
                       allowFullScreen={true}
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Event Venue Location"
                   ></iframe>
               </div>
               <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                   <p className="text-sm md:text-lg text-[#BE9A64] font-semibold mb-2">THE VENUE</p>
                   <h2 className="text-xl md:text-5xl font-semibold text-gray-800">{venueName}</h2>
                   <p className="text-sm md:text-sm mt-4 text-gray-600 font-normal">{venueAddress}</p>
                <div className="text-sm md:text-sm mt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex items-center gap-3 text-[#BE9A64] font-semibold leading-snug">
                        <svg
                            className="w-5 h-5 text-[#BE9A64]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Ahad, 24 Agustus 2025</span>
                    </div>

                    <div className="hidden md:block mx-4 h-6 w-px bg-gray-600" aria-hidden="true"></div>

                    <div className="flex items-center gap-3 text-[#BE9A64] font-semibold leading-snug">
                        <svg
                            className="w-5 h-5 text-[#BE9A64]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15.30 - Selesai</span>
                    </div>
                </div>
               </div>
            </div>
        </div>
      </section>
    );
};

export default Venue;