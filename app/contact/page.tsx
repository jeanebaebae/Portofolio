"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function ContactPage() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <main 
      className={`relative min-h-screen transition-colors duration-500 pb-24 overflow-x-hidden ${
        isLightMode 
          ? 'bg-[#FFFAF4] text-zinc-800 selection:bg-black selection:text-white' 
          : 'bg-[#0a0a0a] text-zinc-200 selection:bg-white selection:text-black'
      }`}
    >
      {/* ELEMEN BULAN DENGAN TOGGLE THEME */}
      <div 
        onClick={toggleTheme}
        className="absolute top-[8%] -right-24 sm:-right-32 md:-right-44 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] z-20 select-none group cursor-pointer"
        title="Click to toggle light/dark theme"
      >
        {/* SVG Curved Text */}
        <svg 
          viewBox="0 0 600 600" 
          className="absolute -inset-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] pointer-events-none overflow-visible z-10 transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <path
              id="moonOuterSpacePath"
              d="M 300, 300 m -270, 0 a 270,270 0 1,1 540,0"
            />
          </defs>
          <text 
            className={`font-mono text-[11px] sm:text-[13px] tracking-[0.25em] font-medium uppercase transition-all duration-300 drop-shadow-md ${
              isLightMode 
                ? 'fill-zinc-600 group-hover:fill-black' 
                : 'fill-zinc-300 group-hover:fill-white'
            }`}
          >
            <textPath href="#moonOuterSpacePath" startOffset="18%">
              CLICK ME
            </textPath>
          </text>
        </svg>

        {/* Gambar Bulan Dark Mode */}
        <Image
          src="/moon.webp"
          alt="Dark Moon Illustration"
          fill
          sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 480px"
          priority
          className={`object-contain filter contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 ${
            isLightMode ? 'opacity-0 rotate-180 scale-90 pointer-events-none' : 'opacity-100 rotate-0 scale-100'
          }`}
        />

        {/* Gambar Bulan Light Mode */}
        <Image
          src="/moon_near.webp"
          alt="Light Moon Illustration"
          fill
          sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 480px"
          priority
          className={`object-contain filter contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 ${
            isLightMode ? 'opacity-100 rotate-0 scale-110' : 'opacity-0 -rotate-180 scale-90 pointer-events-none'
          }`}
        />
      </div>

      {/* Centered container */}
      <div className="relative z-10 max-w-[640px] mx-auto px-5 py-8 md:py-12">
        {/* NAVBAR COMPONENT */}
        <Navbar isLightMode={isLightMode} />

        {/* CONTACT SECTION */}
        <section className="mt-16 md:mt-24">
          <h1 className={`text-3xl md:text-4xl font-bold mb-8 transition-colors ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            Contact me
          </h1>

          {/* Contact Card Container */}
          <div className="relative pt-6">
            {/* Small Floating Pixel Avatar di Atas Edge Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 w-12 h-12 z-10 pointer-events-none">
              <Image
                src="/profile.webp"
                alt="Pixel Avatar"
                fill
                sizes="48px"
                className="object-contain [image-rendering:pixelated]"
              />
            </div>

            {/* Card Frame */}
            <div className={`rounded-2xl border p-5 transition-all duration-300 ${
              isLightMode 
                ? 'border-zinc-300 bg-transparent' 
                : 'border-zinc-800/80 bg-zinc-900/30'
            }`}>
              <div className="space-y-4 divide-y divide-zinc-800/60">
                {/* Email Item */}
                <a 
                  href="mailto:eugene.makawowode@binus.ac.id" 
                  className="flex items-center gap-3 pt-2 first:pt-0 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={`block text-[11px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      Email
                    </span>
                    <span className={`text-[13px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-800 group-hover:text-black' : 'text-zinc-200 group-hover:text-white'
                    }`}>
                      eugene.makawowode@binus.ac.id
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a 
                  href="https://github.com/jeanebaebae" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 pt-4 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={`block text-[11px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      GitHub
                    </span>
                    <span className={`text-[13px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-800 group-hover:text-black' : 'text-zinc-200 group-hover:text-white'
                    }`}>
                      github.com/jeanebaebae
                    </span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a 
                  href="https://linkedin.com/in/eugene-ganesha-hermanus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 pt-4 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className={`block text-[11px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      LinkedIn
                    </span>
                    <span className={`text-[13px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-800 group-hover:text-black' : 'text-zinc-200 group-hover:text-white'
                    }`}>
                      linkedin.com/in/eugene-ganesha-hermanus
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}