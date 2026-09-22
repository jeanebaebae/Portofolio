import Link from 'next/link';

interface NavbarProps {
  isLightMode?: boolean;
}

export default function Navbar({ isLightMode = false }: NavbarProps) {
  return (
    <nav className="flex justify-between items-center mb-5 text-sm">
      <Link 
        href="/" 
        className={`font-semibold text-base tracking-tight hover:opacity-80 transition-opacity ${
          isLightMode ? 'text-black' : 'text-white'
        }`}
      >
        Eugene
      </Link>
      <div className={`flex gap-6 font-medium text-xs md:text-sm ${
        isLightMode ? 'text-zinc-600' : 'text-zinc-400'
      }`}>
        <Link href="/#projects" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
          Projects
        </Link>
        <Link href="/#experience" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
          Experience
        </Link>
        <Link href="/contact" className={`transition-colors ${isLightMode ? 'hover:text-black' : 'hover:text-white'}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}