"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Waves from '@/components/Waves';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function PortfolioPage() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Fungsi toggle tema saat bulan diklik
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    /* Pembungkus Utama (Diatur dinamis berdasarkan mode tema) */
    <main 
      className={`relative min-h-screen transition-colors duration-500 pb-24 overflow-x-hidden ${
        isLightMode 
          ? 'bg-[#FFFAF4] text-zinc-800 selection:bg-black selection:text-white' 
          : 'bg-[#0a0a0a] text-zinc-200 selection:bg-white selection:text-black'
      }`}
    >
      
      {/* 1. ELEMEN BULAN RAKSASA (KHUSUS DESKTOP / HIDDEN IN MOBILE) */}
      <div 
        onClick={toggleTheme}
        className="hidden md:block fixed top-20 -right-44 w-[480px] h-[480px] z-20 select-none group cursor-pointer"
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
            className={`font-mono text-[13px] tracking-[0.25em] font-medium uppercase transition-all duration-300 drop-shadow-md ${
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
          sizes="480px"
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
          sizes="480px"
          priority
          className={`object-contain filter contrast-125 brightness-90 transition-all duration-700 ease-in-out ${
            isLightMode 
              ? 'opacity-100 rotate-0 scale-110 group-hover:scale-115' 
              : 'opacity-0 -rotate-180 scale-90 pointer-events-none'
          }`}
        />
      </div>

      {/* Panggil komponen Navbar terpisah */}
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />

      {/* Centered container (approx 640px wide, diberi pt-16 agar tidak tertutup navbar fixed) */}
      <div className="relative z-10 max-w-[640px] mx-auto px-5 pt-16 md:pt-20 py-8 md:py-12">

        {/* HERO SECTION */}
        <section className="mb-8 mt-4">
          {/* Banner Container */}
          <div className="relative mb-5">
            {/* Wavy Banner Container */}
            <div className={`relative w-full h-[210px] rounded-3xl overflow-hidden shadow-inner border transition-colors duration-500 ${
              isLightMode ? 'bg-[#F2ECE4] border-zinc-300/80' : 'bg-[#0d0d0e] border-zinc-800/80'
            }`}>
                <Waves
                  lineColor={isLightMode ? "#B5B0A8" : "#757575"}
                  backgroundColor={isLightMode ? "#F2ECE4" : "#0a0a0a"}
                  waveSpeedX={0.01}
                  waveSpeedY={0.01}
                  waveAmpX={40}
                  waveAmpY={20}
                  friction={0.9}
                  tension={0.01}
                  maxCursorMove={120}
                  xGap={12}
                  yGap={36}
                />
            </div>

            {/* Floating Profile Image */}
            <div className="absolute -bottom-24 right-2 md:right-4 w-44 md:w-56 h-44 md:h-56 z-10 transition-transform duration-300 hover:scale-105">
              <Image
                src="/profile.webp"
                alt="Profile Avatar"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                priority
                className="object-contain [image-rendering:pixelated]"
              />
            </div>
          </div>

          {/* Intro Heading */}
          <h1 className={`text-2xl md:text-3xl font-bold mb-2.5 tracking-tight transition-colors ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            hi, i'm Eugene
          </h1>

          {/* Availability Status */}
          <div className={`flex items-center gap-2 mb-4 text-xs font-mono ${
            isLightMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Software Engineering Internship</span>
          </div>

          {/* Bio Description (Justified & Full Width sampai Ujung Banner) */}
          <p className={`text-xs md:text-sm leading-relaxed mb-6 w-full text-justify font-normal transition-colors ${
            isLightMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            i'm a third-year computer science student based in Tangerang, Indonesia, 
            focused on building user interfaces and integrating backend services with RESTful API on web and 
            mobile applications.
          </p>

          {/* Social Links (GitHub & LinkedIn) */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://github.com/jeanebaebae"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors p-1 -ml-1 ${
                isLightMode ? 'text-black hover:text-zinc-600' : 'text-white hover:text-zinc-400'
              }`}
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/eugene-ganesha-hermanus-7352ab326/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors p-1 ${
                isLightMode ? 'text-black hover:text-zinc-600' : 'text-white hover:text-zinc-400'
              }`}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </section>

        {/* DIVIDER 1 */}
        <hr className={`my-8 transition-colors ${isLightMode ? 'border-zinc-300/80' : 'border-zinc-800/80'}`} />

        {/* TECH STACK SECTION */}
        <section className="mb-8">
          <div className={`grid grid-cols-5 gap-y-8 gap-x-2 text-center text-[11px] font-medium transition-colors ${
            isLightMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-javascript-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Javascript</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-go-original-wordmark colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Golang</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-nodejs-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Node.js</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-react-original colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>React.js</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-tailwindcss-original colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>TailwindCSS</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-postgresql-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Postgres</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-supabase-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Supabase</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-postman-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Postman</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-redis-plain colored text-3xl"></i>
              </div>
              <span className={`transition-colors ${isLightMode ? 'group-hover:text-black' : 'group-hover:text-white'}`}>Redis</span>
            </div>

          </div>
        </section>

        {/* DIVIDER 2 */}
        <hr className={`my-8 transition-colors ${isLightMode ? 'border-zinc-300/80' : 'border-zinc-800/80'}`} />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-10 scroll-mt-20">
          <h2 className={`text-base font-semibold mb-5 transition-colors ${isLightMode ? 'text-black' : 'text-white'}`}>
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
            {/* Project Card 1 */}
            <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-colors duration-300 ${
              isLightMode 
                ? 'border-zinc-300 bg-transparent' 
                : 'border-zinc-800/80 bg-zinc-900/30'
            }`}>
              <div>
                <div className="relative w-full h-36 rounded-xl mb-3.5 overflow-hidden">
                  <Image
                    src="/motoservis.webp"
                    alt="motoservis application preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                
                <h3 className={`font-semibold text-[14px] mb-1 px-0.5 transition-colors ${
                  isLightMode ? 'text-black' : 'text-white'
                }`}>motoservis</h3>
                <p className={`text-[12px] mb-3.5 px-0.5 leading-relaxed font-normal transition-colors ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  a motorcycle maintenance management application designed to help users 
                  manage their motorcycle information.
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Flutter</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Node.js</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Postgres</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Supabase</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>OAuth</span>
                </div>
              </div>
              
              <div className="px-0.5 pt-1">
                <a
                  href="https://github.com/jeanebaebae/motoservis-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-colors shadow-sm active:scale-95 ${
                    isLightMode 
                      ? 'bg-zinc-900 text-white hover:bg-black' 
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  <FaGithub className="w-4 h-4 flex-shrink-0" />
                  <span>SOURCE</span>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-colors duration-300 ${
              isLightMode 
                ? 'border-zinc-300 bg-transparent' 
                : 'border-zinc-800/80 bg-zinc-900/30'
            }`}>
              <div>
                <div className="relative w-full h-36 rounded-xl mb-3.5 overflow-hidden">
                  <Image
                    src="/Suplaihub.webp"
                    alt="Suplaihub application preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
                
                <h3 className={`font-semibold text-[14px] mb-1 px-0.5 transition-colors ${
                  isLightMode ? 'text-black' : 'text-white'
                }`}>Suplaihub</h3>
                <p className={`text-[12px] mb-3.5 px-0.5 leading-relaxed font-normal transition-colors ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  An easy-to-use platform connecting suppliers and clients to browse products and 
                  track inventory in real time.
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Kotlin</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Jetpack Compose</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Go</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Postgres</span>
                  <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                    isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                  }`}>Supabase</span>
                </div>
              </div>
              
              <div className="px-0.5 pt-1">
                <a
                  href="https://github.com/jeanebaebae/suplaihub-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-colors shadow-sm active:scale-95 ${
                    isLightMode 
                      ? 'bg-zinc-900 text-white hover:bg-black' 
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  <FaGithub className="w-4 h-4 flex-shrink-0" />
                  <span>SOURCE</span>
                </a>
              </div>
            </div>

            {/* Project Card Extra (3 & 4) */}
            {showMoreProjects && (
              <>
                {/* Project Card 3 */}
                <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-colors duration-300 animate-in fade-in slide-in-from-top-4 ${
                  isLightMode 
                    ? 'border-zinc-300 bg-transparent' 
                    : 'border-zinc-800/80 bg-zinc-900/30'
                }`}>
                  <div>
                    <div className="relative w-full h-36 rounded-xl mb-3.5 overflow-hidden">
                      <Image
                        src="/Nusantara.webp"
                        alt="NusantaraFireMap application preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className={`font-semibold text-[14px] mb-1 px-0.5 transition-colors ${
                      isLightMode ? 'text-black' : 'text-white'
                    }`}>NusantaraFireMap</h3>
                    <p className={`text-[12px] mb-3.5 px-0.5 leading-relaxed font-normal transition-colors ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      A real-time fire monitoring dashboard tracking wildfire data across Indonesia using 
                      the NASA FIRMS API.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>React.js</span>
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>TailwindCSS</span>
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>Postgres</span>
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>Redis</span>
                    </div>
                  </div>
                  <div className="px-0.5 pt-1">
                    <a
                      href="https://github.com/jeanebaebae/firetracker-web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-colors shadow-sm active:scale-95 ${
                        isLightMode 
                          ? 'bg-zinc-900 text-white hover:bg-black' 
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      <FaGithub className="w-4 h-4 flex-shrink-0" />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>

                {/* Project Card 4 */}
                <div className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-colors duration-300 animate-in fade-in slide-in-from-top-4 ${
                  isLightMode 
                    ? 'border-zinc-300 bg-transparent' 
                    : 'border-zinc-800/80 bg-zinc-900/30'
                }`}>
                  <div>
                    <div className="relative w-full h-36 rounded-xl mb-3.5 overflow-hidden">
                      <Image
                        src="/Portofolio.webp"
                        alt="Current Portofolio preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className={`font-semibold text-[14px] mb-1 px-0.5 transition-colors ${
                      isLightMode ? 'text-black' : 'text-white'
                    }`}>Current Portofolio</h3>
                    <p className={`text-[12px] mb-3.5 px-0.5 leading-relaxed font-normal transition-colors ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      A simple portofolio website using Next.js and TailwindCSS
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>Next.js</span>
                      <span className={`px-3 py-1 text-[11px] font-medium rounded-md transition-colors ${
                        isLightMode ? 'bg-[#EFE8DF] text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                      }`}>TailwindCSS</span>
                    </div>
                  </div>
                  <div className="px-0.5 pt-1">
                    <a
                      href="https://github.com/jeanebaebae/Portofolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold tracking-wider transition-colors shadow-sm active:scale-95 ${
                        isLightMode 
                          ? 'bg-zinc-900 text-white hover:bg-black' 
                          : 'bg-white text-black hover:bg-zinc-200'
                      }`}
                    >
                      <FaGithub className="w-4 h-4 flex-shrink-0" />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Tombol View More / View Less */}
          <div className="flex justify-end pt-1">
            <button
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className={`group inline-flex items-center gap-1 text-[12px] font-mono transition-colors duration-200 cursor-pointer ${
                isLightMode ? 'text-zinc-600 hover:text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>{showMoreProjects ? 'VIEW LESS' : 'VIEW MORE'}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {showMoreProjects ? '↑' : '→'}
              </span>
            </button>
          </div>
        </section>

        {/* DIVIDER 3 */}
        <hr className={`my-8 transition-colors ${isLightMode ? 'border-zinc-300/80' : 'border-zinc-800/80'}`} />

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-10 scroll-mt-20">
          <h2 className={`text-base font-semibold mb-5 transition-colors ${isLightMode ? 'text-black' : 'text-white'}`}>
            Experience
          </h2>
          
          <div className={`p-5 rounded-2xl border transition-all duration-300 ${
            isLightMode 
              ? 'border-zinc-300 bg-transparent' 
              : 'border-zinc-800/80 bg-zinc-900/30'
          }`}>
            <div className="relative flex gap-4">
              
              {/* Kolom Kiri: Logo & Garis Timeline Vertikal */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Logo Perusahaan */}
                <div className="relative w-8 h-8 rounded-full overflow-hidden z-10 bg-zinc-800 flex-shrink-0">
                  <Image
                    src="/logo_pt_kamunesia.webp"
                    alt="Kamunesia Media Arta Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                {/* Garis Vertikal Timeline */}
                <div className={`w-px flex-1 mt-2.5 transition-colors ${
                  isLightMode ? 'bg-zinc-300' : 'bg-zinc-800'
                }`} />
              </div>

              {/* Kolom Kanan: Detail Informasi & List Poin */}
              <div className="flex-1 pb-1">
                {/* Header: Judul Jabatan & Tanggal */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`font-semibold text-[13px] leading-tight transition-colors ${
                      isLightMode ? 'text-black' : 'text-white'
                    }`}>
                      Kamunesia Media Arta
                    </h3>
                    <p className={`text-[13px] mt-0.5 transition-colors ${
                      isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      Software Engineer (Contract)
                    </p>
                  </div>
                  <span className={`text-[12px] font-medium whitespace-nowrap transition-colors ${
                    isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                  }`}>
                    Jul 2026 - Present
                  </span>
                </div>

                {/* List Poin (list-outside ml-4 membuat alignment teks rapi) */}
                <ul className={`space-y-2 text-[13px] leading-relaxed font-normal list-disc list-outside ml-4 transition-colors ${
                  isLightMode ? 'text-zinc-600' : 'text-zinc-400'
                }`}>
                  <li>
                    Migrated legacy WordPress site to a scalable React and Tailwind CSS architecture to modernize the tech stack.
                  </li>
                  <li>
                    Optimized frontend performance to eliminate latency and deliver a highly responsive, professional user interface.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* DIVIDER 4 */}
        <hr className={`my-8 transition-colors ${isLightMode ? 'border-zinc-300/80' : 'border-zinc-800/80'}`} />

        {/* CONTACT ME SECTION */}
        <section id="contact" className="mb-12 scroll-mt-20">
          <h2 className={`text-2xl md:text-3xl font-bold mb-1 transition-colors ${
            isLightMode ? 'text-black' : 'text-white'
          }`}>
            Contact me
          </h2>

          {/* Contact Card Container */}
          <div className="relative pt-10">
            {/* Small Floating Pixel Avatar */}
            <div className="absolute top-0 right-8 w-20 h-20 z-10 pointer-events-none">
              <Image
                src="/profile.webp"
                alt="Pixel Avatar"
                fill
                sizes="80px"
                className="object-contain [image-rendering:pixelated]"
              />
            </div>

            {/* Card Frame */}
            <div className={`rounded-2xl border p-5 transition-all duration-300 ${
              isLightMode 
                ? 'border-zinc-300 bg-transparent' 
                : 'border-zinc-800/80 bg-zinc-900/30'
            }`}>
              {/* Pembatas divide-y */}
              <div className={`divide-y transition-colors ${
                isLightMode ? 'divide-zinc-300' : 'divide-zinc-800/60'
              }`}>
                {/* Email Item */}
                <a 
                  href="mailto:0506.eugene@gmail.com" 
                  className="flex items-center gap-3 pb-4 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-500">
                      EMAIL
                    </span>
                    <span className={`text-[13px] font-medium transition-colors ${
                      isLightMode ? 'text-zinc-800 group-hover:text-black' : 'text-zinc-200 group-hover:text-white'
                    }`}>
                      0506.eugene@gmail.com
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a 
                  href="https://github.com/jeanebaebae" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 py-4 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-500">
                      GITHUB
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
                  href="https://www.linkedin.com/in/eugene-ganesha-hermanus-7352ab326/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 pt-4 group cursor-pointer"
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    isLightMode ? 'text-zinc-600 group-hover:text-black' : 'text-zinc-400 group-hover:text-white'
                  }`}>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-zinc-500">
                      LINKEDIN
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

        {/* FOOTER */}
        <Footer isLightMode={isLightMode} />

      </div>
    </main>
  );
}