'use client';

import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10 flex flex-col items-center space-y-6">
      {/* Centered Logo */}
      <Image
        src="/wes_logo25.svg"
        alt="Wes Fulghum Design and Development"
        width={160}
        height={100}
        unoptimized
      />

      {/* Social Icons */}
      <div className="flex space-x-6 text-2xl">
        <a
          href="https://www.instagram.com/wesfulghum/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/wes-fulghum-a3045273/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
