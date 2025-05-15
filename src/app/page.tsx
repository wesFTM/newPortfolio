'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [showVideo, setShowVideo] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="relative bg-black text-white">
      <Header setShowVideo={setShowVideo} setShowResume={setShowResume} />

      {/* ... your content ... */}

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
