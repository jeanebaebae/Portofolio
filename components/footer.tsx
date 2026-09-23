interface FooterProps {
  isLightMode?: boolean;
}

export default function Footer({ isLightMode = false }: FooterProps) {
  return (
    <footer className={`pt-6 border-t flex justify-between items-center text-[12px] transition-colors ${
      isLightMode ? 'border-zinc-300/80 text-zinc-500' : 'border-zinc-800/50 text-zinc-500'
    }`}>
      <p>© {new Date().getFullYear()} Eugene.</p>
    </footer>
  );
}