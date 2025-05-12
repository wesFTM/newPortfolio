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

      <section className="relative min-h-screen flex items-center justify-center">
  {/* Framed video container */}
  <div className="relative w-full h-full px-10 py-30 md:px-20 lg:px-32 z-0">
    <div className="rounded-3xl overflow-hidden shadow-2xl w-full h-[80vh] md:h-[90vh]">
      <video
        className="w-full h-full object-cover"
        src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
</section>

      {/* Projects Section */}
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
