import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  isLightMode?: boolean;
  toggleTheme?: () => void;
}

export default function Navbar({ isLightMode = false, toggleTheme }: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      isLightMode 
        ? 'bg-[#FFFAF4]/80 border-zinc-300/50' 
        : 'bg-[#0a0a0a]/80 border-zinc-800/50'
    }`}>
      <div className="max-w-[640px] mx-auto px-5 py-3 flex justify-between items-center text-sm">
        
        {/* Avatar Pixel Profile Pengganti Teks Eugene */}
        <Link 
          href="/" 
          className="relative w-9 h-9 flex-shrink-0 transition-transform hover:scale-110 active:scale-95"
          aria-label="Home"
        >
          <Image
            src="/profile.webp"
            alt="Profile Avatar"
            fill
            sizes="28px"
            priority
            className="object-contain [image-rendering:pixelated]"
          />
        </Link>

        <div className="flex items-center gap-5">
          {/* Link Navigasi */}
          <div className={`flex gap-5 font-medium text-xs md:text-sm ${
            isLightMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}>
            <Link href="#projects" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
              Projects
            </Link>
            <Link href="#experience" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
              Experience
            </Link>
            <Link href="#contact" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
              Contact
            </Link>
          </div>

          {/* Toggle Bulan Mini Khusus Mobile */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden focus:outline-none cursor-pointer active:scale-90 transition-transform"
              title="Toggle theme"
              aria-label="Toggle light/dark theme"
            >
              <Image
                src="/moon.webp"
                alt="Dark Moon Mini"
                width={36}
                height={36}
                className={`object-contain transition-all duration-700 ease-in-out ${
                  isLightMode ? 'opacity-0 rotate-180 scale-75 absolute' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <Image
                src="/moon_near.webp"
                alt="Light Moon Mini"
                width={36}
                height={36}
                className={`object-contain transition-all duration-700 ease-in-out ${
                  isLightMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75 absolute'
                }`}
              />
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}