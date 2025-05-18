'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // npm install lucide-react

type HeaderProps = {
  setShowVideo?: (show: boolean) => void;
  setShowResume?: (show: boolean) => void;
};

export default function Header({ setShowVideo, setShowResume }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 py-5 px-6 lg:px-30 flex items-center justify-between bg-black/40 backdrop-blur-sm">
        {/* Left: Logo + Subtitle */}
        <div className="flex flex-col items-start space-y-1">
          <Link href="/">
            <Image
              src="/wes_logo25_1.svg"
              alt="Wes Fulghum Logo"
              width={250}
              height={140}
              unoptimized
            />
          </Link>
          <p className="text-white/70 text-sm">Designer & Developer based in NYC</p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white font-bold text-xs">
  <button
  onClick={() => setShowResume?.(true)}
  className="hover:underline font-bold"
>
    ABOUT
  </button>
  <Link href="/#projects" className="hover:underline">PROJECTS</Link>
  <Link href="#contact" className="hover:underline">CONTACT</Link>
  <button
  onClick={() => setShowVideo?.(true)}
  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
>
  WATCH VIDEO
</button>
</nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 px-6 py-8 flex flex-col items-start space-y-6 text-white text-lg font-semibold">
  <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-white">
    <X size={28} />
  </button>
  <button
  onClick={() => setShowResume?.(true)}
  className="hover:underline font-bold"
>
  ABOUT
</button>
  <Link href="#projects" onClick={() => setMobileOpen(false)}>PROJECTS</Link>
  <Link href="#contact" onClick={() => setMobileOpen(false)}>CONTACT</Link>
  <button
  onClick={() => setShowVideo?.(true)}
  className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
>
  WATCH VIDEO
</button>
</div>
      )}
    </>
  );
}
