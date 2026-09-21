"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Waves from '@/components/Waves';

export default function PortfolioPage() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    /* Pembungkus Utama (Diatur relative & overflow-x-hidden agar gambar tidak memicu scroll samping) */
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-200 selection:bg-white selection:text-black pb-24 overflow-x-hidden">
      
{/* ELEMEN BULAN DENGAN TEKS MELENGKUNG DI AREA HITAM LUAR BULAN */}
      <div className="absolute top-[8%] -right-24 sm:-right-32 md:-right-44 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] z-0 select-none group cursor-pointer">
        
        {/* SVG Curved Text (Memiliki efek scale-105 pas hover agar ikut bergeser menjauh mengikuti bulan) */}
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
          <text className="fill-zinc-300 font-mono text-[11px] sm:text-[13px] tracking-[0.25em] font-medium uppercase group-hover:fill-white group-hover:tracking-[0.3em] transition-all duration-300 drop-shadow-md">
            <textPath href="#moonOuterSpacePath" startOffset="18%">
              CLICK ME
            </textPath>
          </text>
        </svg>

        {/* Gambar Bulan */}
        <Image
          src="/moon.webp"
          alt="Moon Illustration"
          fill
          sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 480px"
          priority
          className="object-contain filter contrast-125 brightness-90 transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* Centered container (approx 640px wide) */}
      <div className="relative z-10 max-w-[640px] mx-auto px-5 py-8 md:py-12">
        
        {/* NAVBAR */}
        <nav className="flex justify-between items-center mb-5 text-sm">
          <Link 
            href="/" 
            className="font-semibold text-white text-base tracking-tight hover:opacity-80 transition-opacity"
          >
            Eugene
          </Link>
          <div className="flex gap-6 text-zinc-400 font-medium text-xs md:text-sm">
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="mb-8">
          {/* Banner Container with Topography Wave Background & Floating Card */}
          <div className="relative mb-5">
            {/* Wavy Banner Container */}
            <div className="relative w-full h-[210px] bg-[#0d0d0e] rounded-3xl border border-zinc-800/80 overflow-hidden shadow-inner">
                <Waves
                  lineColor="#757575"
                  backgroundColor="#0a0a0a"
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

            {/* Floating Profile Image (Posisi Diturunkan Lebih Ke Bawah) */}
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
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2.5 tracking-tight">
            hi, im Eugene
          </h1>

          {/* Availability Status */}
          <div className="flex items-center gap-2 mb-4 text-xs font-medium text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Software Engineering Internship</span>
          </div>

          {/* Bio Description */}
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed mb-6 max-w-xl font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          {/* Social Links (GitHub & LinkedIn) */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors p-1 -ml-1"
              aria-label="GitHub Profile"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* DIVIDER 1 */}
        <hr className="border-zinc-800/80 my-8" />

        {/* TECH STACK SECTION */}
        <section className="mb-8">
          <div className="grid grid-cols-5 gap-y-8 gap-x-2 text-center text-[11px] font-medium text-zinc-400">
            
            {/* JavaScript */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-javascript-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Javascript</span>
            </div>

            {/* Golang */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-go-original-wordmark colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Golang</span>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-nodejs-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Node.js</span>
            </div>

            {/* React.js */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-react-original colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">React.js</span>
            </div>

            {/* TailwindCSS */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-tailwindcss-original colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">TailwindCSS</span>
            </div>

            {/* Postgres */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-postgresql-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Postgres</span>
            </div>

            {/* Supabase */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-supabase-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Supabase</span>
            </div>

            {/* Postman */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-postman-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Postman</span>
            </div>

            {/* Redis */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="transition-all duration-300 transform group-hover:scale-150 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100">
                <i className="devicon-redis-plain colored text-3xl"></i>
              </div>
              <span className="group-hover:text-white transition-colors">Redis</span>
            </div>

          </div>
        </section>

        {/* DIVIDER 2 */}
        <hr className="border-zinc-800/80 my-8" />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-10 scroll-mt-10">
          <h2 className="text-base font-semibold text-white mb-5">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
            {/* Project Card 1 */}
            <div className="p-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 cursor-pointer">
              <div className="w-full h-36 bg-[#27272a]/70 rounded-xl mb-3.5 transition-colors"></div>
              
              <h3 className="font-semibold text-white text-[14px] mb-1 px-0.5">Project 1</h3>
              <p className="text-[12px] text-zinc-400 mb-3.5 px-0.5 leading-relaxed font-normal">
                A product catalog application for suppliers and clients
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  Postgres
                </span>
              </div>
              
              <div className="px-0.5 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/gh text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="px-2.5 py-0.5 bg-white text-black text-[11px] font-semibold rounded-full opacity-0 -translate-x-2 group-hover/gh:opacity-100 group-hover/gh:translate-x-0 transition-all duration-200 ease-out shadow-md">
                    Open
                  </span>
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="p-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 cursor-pointer">
              <div className="w-full h-36 bg-[#27272a]/70 rounded-xl mb-3.5 transition-colors"></div>
              
              <h3 className="font-semibold text-white text-[14px] mb-1 px-0.5">Project 2</h3>
              <p className="text-[12px] text-zinc-400 mb-3.5 px-0.5 leading-relaxed font-normal">
                A product catalog application for suppliers and clients
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">
                  Postgres
                </span>
              </div>
              
              <div className="px-0.5 pt-1">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/gh text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="px-2.5 py-0.5 bg-white text-black text-[11px] font-semibold rounded-full opacity-0 -translate-x-2 group-hover/gh:opacity-100 group-hover/gh:translate-x-0 transition-all duration-200 ease-out shadow-md">
                    Open
                  </span>
                </a>
              </div>
            </div>

            {/* Project Card Extra (3 & 4) - Muncul saat tombol View More diklik */}
            {showMoreProjects && (
              <>
                {/* Project Card 3 */}
                <div className="p-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="w-full h-36 bg-[#27272a]/70 rounded-xl mb-3.5 transition-colors"></div>
                  <h3 className="font-semibold text-white text-[14px] mb-1 px-0.5">Project 3</h3>
                  <p className="text-[12px] text-zinc-400 mb-3.5 px-0.5 leading-relaxed font-normal">
                    A product catalog application for suppliers and clients
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Next.js</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Tailwind</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Supabase</span>
                  </div>
                  <div className="px-0.5 pt-1">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group/gh text-zinc-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="px-2.5 py-0.5 bg-white text-black text-[11px] font-semibold rounded-full opacity-0 -translate-x-2 group-hover/gh:opacity-100 group-hover/gh:translate-x-0 transition-all duration-200 ease-out shadow-md">Open</span>
                    </a>
                  </div>
                </div>

                {/* Project Card 4 */}
                <div className="p-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="w-full h-36 bg-[#27272a]/70 rounded-xl mb-3.5 transition-colors"></div>
                  <h3 className="font-semibold text-white text-[14px] mb-1 px-0.5">Project 4</h3>
                  <p className="text-[12px] text-zinc-400 mb-3.5 px-0.5 leading-relaxed font-normal">
                    A product catalog application for suppliers and clients
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4 px-0.5">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Golang</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Redis</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-200 text-[11px] font-medium rounded-md">Postgres</span>
                  </div>
                  <div className="px-0.5 pt-1">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group/gh text-zinc-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6 fill-current flex-shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="px-2.5 py-0.5 bg-white text-black text-[11px] font-semibold rounded-full opacity-0 -translate-x-2 group-hover/gh:opacity-100 group-hover/gh:translate-x-0 transition-all duration-200 ease-out shadow-md">Open</span>
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
              className="group inline-flex items-center gap-1 text-[12px] text-zinc-400 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
            >
              <span>{showMoreProjects ? 'View less' : 'View more'}</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                {showMoreProjects ? '↑' : '→'}
              </span>
            </button>
          </div>
        </section>

        {/* DIVIDER 3 */}
        <hr className="border-zinc-800/80 my-8" />

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-10 scroll-mt-10">
          <h2 className="text-base font-semibold text-white mb-5">Experience</h2>
          
          <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700/80 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs shadow-sm">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-white text-[13px] leading-tight">
                    Kamunesia Media Arta
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Software Engineer (Contract)
                  </p>
                </div>
              </div>
              <span className="text-[11px] text-zinc-400 font-medium">
                Jul 2025 - Present
              </span>
            </div>

            <ul className="space-y-1.5 text-[12px] text-zinc-400 leading-relaxed font-normal list-disc list-inside pl-1">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              </li>
              <li>
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              </li>
              <li>
                ut aliquip ex ea commodo consequat.
              </li>
            </ul>
          </div>
        </section>

        {/* FOOTER / CONTACT SECTION */}
        <footer id="contact" className="scroll-mt-10 pt-6 border-t border-zinc-800/50 flex justify-between items-center text-[12px] text-zinc-500">
          <p>© {new Date().getFullYear()} Eugene. All rights reserved.</p>
          <a href="mailto:eugene@example.com" className="hover:text-white transition-colors">
            Get in touch &rarr;
          </a>
        </footer>

      </div>
    </main>
  );
}