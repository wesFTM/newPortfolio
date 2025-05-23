'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const phrases = [
  'Interactive Design',
  'Frontend Development',
  'Next.js',
  'TypeScript',
  'Motion Graphics',
  'Video Editing',
  'Creative Direction',
  'Product Design',
  'Tailwind',
  'Graphic Design',
];

export default function RollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 w-full flex justify-center text-2xl md:text-3xl font-medium text-white">
      <div className="flex items-baseline gap-2">
        <span>I have experience with</span>
        <div className="relative" style={{ paddingTop: '0.1em', paddingBottom: '0.1em' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={phrases[index]}
              initial={{ opacity: 0, y: '0.4em' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-0.4em' }}
              transition={{ duration: 0.5 }}
              className="absolute bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            >
              {phrases[index]}
            </motion.span>
          </AnimatePresence>
          {/* Spacer for height to prevent clipping */}
          <span className="invisible">
            Frontend Development
          </span>
        </div>
      </div>
    </div>
  );
}
