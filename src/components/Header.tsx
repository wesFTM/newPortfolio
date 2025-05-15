'use client';

import Link from 'next/link';
import Image from 'next/image';

type HeaderProps = {
  setShowVideo: (show: boolean) => void;
  setShowResume: (show: boolean) => void;
};

export default function Header({ setShowVideo, setShowResume }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 w-full z-30 py-10 px-8 lg:px-30 py-5 flex items-center justify-between bg-black/40 backdrop-blur-sm">
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

      {/* Right: Nav + Video Button */}
      <nav className="flex items-center space-x-6 text-white font-bold text-xs md:text-xs">
        <button
          onClick={() => setShowResume(true)}
          className="hover:underline font-bold"
        >
          ABOUT
        </button>
        <Link href="#projects" className="hover:underline">PROJECTS</Link>
        <Link href="#contact" className="hover:underline">CONTACT</Link>
        <button
          onClick={() => setShowVideo(true)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          WATCH VIDEO
        </button>
      </nav>
    </header>
  );
}
