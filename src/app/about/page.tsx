'use client';

import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="px-6 py-28 max-w-4xl mx-auto space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            I`&apos;`m Wes Fulghum, a multidisciplinary designer and developer based in NYC. I specialize in interactive design, frontend development, motion graphics, and creative direction. With a passion for crafting engaging digital experiences, I blend design aesthetics with technical expertise to bring ideas to life.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-bold">Senior Designer & Developer</h3>
              <h4>First Tube | Horizon Media</h4>
              <p className="text-sm text-gray-400">May 2020 – May 2025</p>
              <p>
                Lead the design and development of interactive web experiences for a variety of clients, focusing on user engagement and responsive design backed by meaningful data and insights.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Sr. Designer</h3>
              <h4>WME|IMG Endeavor</h4>
              <p className="text-sm text-gray-400">April 2015 – April 2020</p>
              <p>
               Help build and foster a design team focused on developing conceptual designs for sales.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Designer</h3>
              <h4>Bonnier Corp. | Popular Photography and American Photo Magazines</h4>
              <p className="text-sm text-gray-400">March 2012 – April 2015</p>
              <p>
               Managed full layout of magazines and contributed a column for fast photoshop fixes.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-bold">BFA in Graphic Design</h3>
              <p className="text-sm text-gray-400">University of Design, 2013 – 2017</p>
              <p>
                Focused on visual communication, typography, and interactive media.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-4">
            <li className="bg-white text-black px-3 py-1 rounded">Interactive Design</li>
            <li className="bg-white text-black px-3 py-1 rounded">Frontend Development</li>
            <li className="bg-white text-black px-3 py-1 rounded">Next.js</li>
            <li className="bg-white text-black px-3 py-1 rounded">TypeScript</li>
            <li className="bg-white text-black px-3 py-1 rounded">Motion Graphics</li>
            <li className="bg-white text-black px-3 py-1 rounded">Video Editing</li>
            <li className="bg-white text-black px-3 py-1 rounded">Creative Direction</li>
            <li className="bg-white text-black px-3 py-1 rounded">Product Design</li>
          </ul>
        </section>

        <section>
          <a
            href="/WesleyFulghumResume2025.pdf"
            download
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </section>
      </div>
    </main>
  );
}
