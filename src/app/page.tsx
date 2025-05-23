'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Header from '@/components/Header';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="relative bg-black text-white">
      <Header setShowVideo={setShowVideo} setShowResume={setShowResume} />

      {/* Inset Video Section */}
      <section className="pt-40 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32">
        <div
          className="w-full h-[70vh] overflow-hidden rounded-2xl shadow-2xl animate-fade-in cursor-pointer bg-black"
          onClick={() => setShowVideo(true)}
        >
          <video
            className="w-full h-full object-contain"
            src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025_1280.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Chevron */}
      <div className="flex justify-center mt-10 mb-20">
        <a href="#projects" className="text-white/70 hover:text-white transition animate-bounce text-3xl">
          <FiChevronDown />
        </a>
      </div>

     <section id="projects">
  <ProjectsGrid />
</section>
      <Footer />

      {/* Video Lightbox Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025_1280.mp4"
              title="Wes Fulghum Video"
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
    </main>
  );
}
