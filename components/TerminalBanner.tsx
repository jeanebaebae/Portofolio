'use client';

import { useState, useEffect } from 'react';

const codeSnippet = `import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Example app listening on port \${port}\`);
});`;

interface TerminalBannerProps {
  isLightMode?: boolean;
}

export default function TerminalBanner({ isLightMode = false }: TerminalBannerProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeSnippet[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const lines = displayedText.split('\n');

  return (
    <div
      className={`relative w-full rounded-sm overflow-hidden shadow-2 border transition-colors duration-300 text-left font-mono select-none ${
        isLightMode
          ? 'bg-[#F7F7F7] border-zinc-200 shadow-zinc-200/50'
          : 'bg-[#1A1A1A] border-zinc-800/60 shadow-black/40'
      }`}
    >
      {/* Header macOS Window */}
      <div
        className={`flex items-center justify-between px-4 py-2.5 border-b transition-colors duration-300 ${
          isLightMode
            ? 'bg-[#EDEDED] border-zinc-200'
            : 'bg-[#181825] border-zinc-800/80'
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div
          className={`font-sans text-[11px] tracking-wide transition-colors ${
            isLightMode ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          app.ts
        </div>
        <div className="w-10" />
      </div>

      {/* Area Code Terminal - Teks Rapat ke Kiri */}
      <div
        className={`pl-1 pr-3 py-3 sm:pl-1.5 sm:pr-4 sm:py-4 overflow-x-auto min-h-[210px] max-h-[280px] leading-snug font-mono text-[10px] sm:text-xs transition-colors duration-300 ${
          isLightMode ? 'text-zinc-800' : 'text-zinc-200'
        }`}
      >
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-start">
            <span
              className={`w-5 shrink-0 text-right pr-1 select-none font-mono transition-colors ${
                isLightMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {idx + 1}
            </span>
            <pre className="whitespace-pre font-mono overflow-visible">
              <code>{highlightSyntax(line, isLightMode)}</code>
              {idx === lines.length - 1 && currentIndex < codeSnippet.length && (
                <span
                  className={`inline-block w-1.5 h-3.5 ml-0.5 animate-pulse align-middle ${
                    isLightMode ? 'bg-emerald-600' : 'bg-emerald-400'
                  }`}
                />
              )}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

// Syntax Highlighting Dinamis berdasarkan Tema (Light / Dark)
function highlightSyntax(line: string, isLightMode: boolean) {
  // Palet Warna Light Mode vs Dark Mode
  const colors = isLightMode
    ? {
        keyword: 'text-purple-600 font-semibold',
        function: 'text-blue-600',
        string: 'text-emerald-700',
        type: 'text-amber-600',
        variable: 'text-indigo-600',
      }
    : {
        keyword: 'text-pink-400 font-semibold',
        function: 'text-blue-400',
        string: 'text-emerald-300',
        type: 'text-yellow-300',
        variable: 'text-purple-300',
      };

  let formatted = line.replace(
    /\b(import|from|const|type)\b/g,
    `<span class="${colors.keyword}">$1</span>`
  );

  formatted = formatted.replace(
    /\b(express|get|listen|send|log)\b/g,
    `<span class="${colors.function}">$1</span>`
  );

  formatted = formatted.replace(
    /('[^']*'|`[^`]*`)/g,
    `<span class="${colors.string}">$1</span>`
  );

  formatted = formatted.replace(
    /\b(Express|Request|Response)\b/g,
    `<span class="${colors.type}">$1</span>`
  );

  formatted = formatted.replace(
    /\b(port|app|req|res|console)\b/g,
    `<span class="${colors.variable}">$1</span>`
  );

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}