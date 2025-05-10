import Header from '@/components/Header';
import ProjectsGrid from '@/components/ProjectsGrid';
export const metadata = {
  title: "Wes Fulghum – Designer & Full Stack Developer",
  description: "Portfolio of Wes Fulghum: creative technologist, designer, and full stack developer based in NYC.",
};

export default function HomePage() {
  return (
    <main className="relative bg-black text-white">
      <Header />

      {/* Inset YouTube Video with spacing */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-12 md:inset-20 lg:inset-32 z-0 rounded-3xl overflow-hidden shadow-2xl pointer-events-none">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/U-45BZbmvIY?autoplay=1&mute=1&controls=0&loop=1&playlist=U-45BZbmvIY&modestbranding=1&showinfo=0&rel=0"
            title="YouTube video background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
      </section>

      {/* Projects Section */}
      <ProjectsGrid />
    </main>
  );
}
