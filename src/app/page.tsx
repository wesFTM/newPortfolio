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
  <div className="absolute inset-12 md:inset-20 lg:inset-32 z-0 rounded-3xl overflow-hidden shadow-2xl pointer-events-none">
    <video
      className="w-full h-full object-cover"
      src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
  {/* Optional overlay */}
  <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
</section>

      {/* Projects Section */}
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
