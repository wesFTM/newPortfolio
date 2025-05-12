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

      <section className="relative pt-24 flex items-center justify-center">
        <div className="w-full px-6 md:px-20 lg:px-32">
          <div className="rounded-1xl overflow-hidden shadow-2xl w-full h-[90vh]">
            <video
              className="w-full h-full object-cover object-center"
              src="https://pub-040eb69763f14186b11b39e2584847be.r2.dev/WESFULGHUM_DESIGN_DEV_2025.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      <ProjectsGrid />
      <Footer />
    </main>
  );
}

