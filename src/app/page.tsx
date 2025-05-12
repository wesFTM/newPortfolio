import { FiChevronDown } from 'react-icons/fi';
import Header from '@/components/Header';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Wes Fulghum – Designer & Full Stack Developer",
  description: "Portfolio of Wes Fulghum: creative technologist, designer, and full stack developer based in NYC.",
};

export default function HomePage() {
  return (
    <main className="relative bg-black text-white">
      <Header />

      {/* Inset Video Section */}
      <section className="pt-40 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32">
        <div className="w-full h-[70vh] overflow-hidden rounded-2xl shadow-2xl animate-fade-in">
          <video
            className="w-full h-full object-cover object-center"
            src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Chevron Below Video */}
      <div className="flex justify-center mt-10 mb-20">
        <a href="#projects" className="text-white/70 hover:text-white transition animate-bounce text-3xl">
          <FiChevronDown />
        </a>
      </div>

      <ProjectsGrid />
      <Footer />
    </main>
  );
}
