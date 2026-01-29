import projects from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-center p-10">
        <div>
          <h1 className="text-3xl font-bold">Page doesn’t exist</h1>
          <p className="mt-4">
            We couldn’t find a project with the slug “{slug}”.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-40 px-6 flex flex-col items-center justify-start text-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-3 text-xl">{project.role}</p>
          <p className="mt-3">{project.description}</p>
          <p className="mt-3">{project.tech}</p>
        </div>

        {project.mainVideo && (
          <>
            <video
              src={project.mainVideo}
              controls
              className="mt-8 w-full max-w-4xl rounded-lg shadow-lg"
            />
            <p className="mt-3 max-w-2xl">{project.mainDisc}</p>
          </>
        )}

        {project.innovationLink && (
          <>
            <video
              src={project.innovationLink}
              controls
              className="mt-8 w-full max-w-xl rounded-lg shadow-lg"
            />
            <p className="mt-3 max-w-2xl">{project.innovation}</p>
          </>
        )}

        {project.websiteImage && (
          <>
            <div className="mt-8 w-full max-w-4xl">
              <Image
                src={project.websiteImage}
                alt={`${project.title} website`}
                width={1600}
                height={900}
                className="rounded-lg shadow-lg w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
            <p className="mt-3 max-w-xl">{project.websiteDesc}</p>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
