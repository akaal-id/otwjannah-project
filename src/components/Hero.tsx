"use client";
import React from "react";

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative flex flex-col items-center justify-center w-full hero-section-responsive"
    style={{
      aspectRatio: "16/9",
      background: "url(/images/Main%20Background.png) center/cover no-repeat",
    }}
    aria-label="Hero section"
  >
    {/* Dark overlay to remove transparency */}
    <div className="absolute inset-0 bg-black/0" aria-hidden="true"></div>
    
    {/* Logo with hover effect */}
    <div className="relative z-10 group flex flex-col items-center">
      <style jsx global>{`
        @keyframes floating-wave {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.01); }
          100% { transform: translateY(0) scale(1); }
        }
        .floating-wave {
          animation: floating-wave 12s ease-in-out infinite;
          will-change: transform;
        }
        .group:hover .floating-wave {
          animation-play-state: paused;
        }
      `}</style>
      <img
        src="/images/main-logo-new.png"
        alt="On The Way to Jannah Logo"
        className="mx-auto max-w-[120vw] h-auto transition-transform duration-500 ease-in-out group-hover:scale-105 hero-logo-responsive floating-wave"
        loading="lazy"
        aria-label="Main Logo"
        style={{
          maxWidth: "1920px",
          height: "auto",
          transformOrigin: "center",
          marginTop: "72px",
        }}
      />
    </div>
    {/* Scroll button above gradient */}
    <div className="relative z-30 flex flex-col items-center w-full" style={{marginTop: '0px'}}>
      <a
        href="#about"
        className="z-20"
        aria-label="Scroll to content"
        style={{ display: 'block' }}
      >
        <img
          src="/images/arrow-down@2x.png"
          alt="Scroll Down"
          width={48}
          height={48}
          loading="lazy"
          className="hero-arrow-responsive"
        />
      </a>
    </div>
    {/* Smooth gradient transition at the bottom */}
    <div
      className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 sm:h-24 z-20"
      style={{
        background: "linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 100%)"
      }}
      aria-hidden="true"
    />
    <style>{`
      @media (max-width: 640px) {
        .hero-section-responsive {
          aspect-ratio: 4/5 !important;
          background: url('/images/Main Background_ver.png') center/cover no-repeat !important;
        }
        .hero-logo-responsive {
          max-width: 360px !important;
          margin-top: 84px !important;
        }
        .hero-arrow-responsive {
          width: 32px !important;
          height: 32px !important;
        }
      }
    `}</style>
  </section>
);

export default Hero;