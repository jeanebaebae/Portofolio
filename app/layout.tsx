import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eugene Ganesha Hermanus - Software Engineer",
  description: "Third-year computer science student focused on building user interfaces and integrating backend services.",
  icons: {
    icon: '/profile.webp',
    shortcut: '/profile.webp',
    apple: '/profile.webp', // Untuk tampilan saat di-bookmark di iPhone/Safari
  },

  openGraph: {
    title: "Eugene's Portfolio",
    description: "Third-year computer science student focused on building user interfaces and integrating backend services.",
    url: "https://eugeneeg.vercel.app", // Ganti dengan URL domain publik kamu
    images: [
      {
        url: "https://eugeneeg.vercel.app/og_image.webp", // Wajib menggunakan URL Absolut (bukan relatif)
        width: 1200,
        height: 630,
        alt: "Eugene Ganesha Hermanus Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-zinc-200 font-sans selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}