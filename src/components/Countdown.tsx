"use client";
import React, { useEffect, useState } from "react";

const EVENT_DATE = new Date("2025-08-24T00:00:00+07:00");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    // Prevent hydration mismatch: render nothing until client-side
    return <section className="w-full flex justify-center" style={{ minHeight: 120 }} />;
  }

  return (
    <section className="w-full bg-[#0a0a0a] flex justify-center p-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 flex flex-col items-center md:items-start md:justify-center mb-4 md:mb-0">
          <span className="text-[#cea15c] text-3xl md:text-5xl font-semibold leading-tight text-center md:text-left">
            Save The Date!
          </span>
          <span className="text-white text-2xl md:text-4xl font-normal leading-none mt-0 text-center md:text-left">
            Ajakkan Kebaikan Menantimu!
          </span>
        </div>
        {/* Countdown Numbers: vertical stack on mobile, horizontal on desktop */}
        <div className="flex flex-row md:flex-row gap-4 md:gap-12 flex-1 justify-center w-full max-w-3xl">
          {/* Mobile: vertical stack, Desktop: horizontal row */}
          <div className="flex flex-row md:flex-row gap-2.5 md:gap-0 w-full justify-center items-center">
            {[{value: timeLeft.days, label: 'Hari'}, {value: timeLeft.hours, label: 'Jam'}, {value: timeLeft.minutes, label: 'Menit'}, {value: timeLeft.seconds, label: 'Detik'}].map((item, idx) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col items-center min-w-[70px]">
                  <span className="text-[#cea15c] text-4xl md:text-6xl font-semibold">{item.value}</span>
                  <span className="text-[#cea15c] text-sm md:text-xl mt-1">{item.label}</span>
                </div>
                {idx < 3 && (
                  <div className="h-full w-0 border-l border-[#cea15c] md:h-full md:w-0 md:border-l md:border-t md:border-[#cea15c] mx-0 md:mx-12"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
