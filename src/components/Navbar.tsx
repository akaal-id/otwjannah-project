"use client";
import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/constants/nav";
import { debounce } from "@/utils/debounce";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [active, setActive] = useState<string>(NAV_ITEMS[0].href);

  useEffect(() => {
    const handleScroll = debounce(() => {
      let found = NAV_ITEMS[0].href;
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = (el as HTMLElement).getBoundingClientRect();
          if (rect.top <= 80) {
            found = item.href;
          }
        }
      }
      setActive(found);
      setAtTop(window.scrollY < 10);
    }, 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarToggle = (shouldOpen: boolean) => {
    setIsAnimating(true);
    if (shouldOpen) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 300); // Match this with the transition duration
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
        atTop 
          ? "bg-transparent" 
          : "bg-black/20 backdrop-blur-md shadow-lg"
      }`}
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        {/* Logo and Desktop Navigation */}
        <a href="/" aria-label="Home">
          <img
            src="/images/main-logo.png"
            alt="Logo"
            className="h-12 w-auto main-logo-navbar"
            loading="lazy"
            style={{ marginTop: "6px" }}
          />
        </a>
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 relative">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="relative flex flex-col-reverse items-center">
                <a
                  href={item.href}
                  className={`relative ${
                    active === item.href 
                      ? "text-[#cea15c] font-semibold" 
                      : "text-white font-normal"
                  } hover:text-[#cea15c] transition-all duration-200 px-2`}
                  onClick={(e) => {
                    const el = document.querySelector(item.href);
                    if (el) {
                      e.preventDefault();
                      (el as HTMLElement).scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }
                  }}
                >
                  {item.label}
                </a>
                {active === item.href && (
                  <span className="absolute -top-8 left-0 right-0 h-0.5 w-full bg-[#cea15c]" />
                )}
              </li>
            ))}
          </ul>

          <a
            href="https://hegira-1-5.vercel.app"
            target="_blank"
            rel="noopener"
            className="hidden md:inline-block ml-4 px-6 py-2 rounded-md font-semibold text-white text-base whitespace-nowrap"
            style={{
              background: "linear-gradient(90deg, #cea15c 0%, #ffd992 50%, #703f23 100%)"
            }}
          >
            Get Your Ticket
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => handleSidebarToggle(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar with Smooth Slide Animation */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleSidebarToggle(false)}
        />
        
        {/* PERUBAHAN PENTING: Hapus kondisi atTop dari background sidebar */}
        <div 
          className={`absolute right-0 top-0 h-full w-full bg-black/60 backdrop-blur-lg p-8 flex flex-col transition-transform duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="self-end text-white text-2xl"
            onClick={() => handleSidebarToggle(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          <ul className="mt-12 space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block py-2 text-lg ${
                    active === item.href 
                      ? "text-[#cea15c] font-semibold" 
                      : "text-white font-normal"
                  }`}
                  onClick={(e) => {
                    const el = document.querySelector(item.href);
                    if (el) {
                      e.preventDefault();
                      (el as HTMLElement).scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                      handleSidebarToggle(false);
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://hegira-1-5.vercel.app"
            target="_blank"
            rel="noopener"
            className="mt-8 px-6 py-3 rounded-md font-semibold text-white text-center"
            style={{
              background: "linear-gradient(90deg, #cea15c 0%, #ffd992 50%, #703f23 100%)"
            }}
          >
            Get Your Ticket
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;