'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const [showVideo, setShowVideo] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-30 px-8 lg:px-30 py-10 flex items-center justify-between bg-black/40 backdrop-blur-sm">
        {/* Left: Logo + Subtitle */}
        <div className="flex flex-col items-start space-y-1">
          <Link href="/">
            <Image
              src="/wes_logo25_1.svg"
              alt="Wes Fulghum Logo"
              width={180}
              height={70}
              unoptimized
            />
          </Link>
          <p className="text-white/70 text-sm">Designer & Full Stack Developer based in NYC</p>
        </div>

        {/* Right: Nav + Video Button */}
        <nav className="flex items-center space-x-6 text-white text-sm md:text-base">
          <button
            onClick={() => setShowResume(true)}
            className="hover:underline"
          >
            About
          </button>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <button
            onClick={() => setShowVideo(true)}
            className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Watch Video
          </button>
        </nav>
      </header>

      {/* Resume Lightbox Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl h-[80vh] bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="/WesleyFulghumResume2025.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 text-white text-xl bg-black/60 rounded-full p-2 hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>
            <a
              href="/WesleyFulghumResume2025.pdf"
              download
              className="absolute bottom-3 right-3 bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}

      {/* Video Lightbox Modal (unchanged) */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/U-45BZbmvIY?autoplay=1&mute=0"
              title="Wes Fulghum Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-xl bg-black/60 rounded-full p-2 hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
