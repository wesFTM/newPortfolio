import { notFound } from 'next/navigation';
import projects from '@/data/projects'; // assume a local file with project data


export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-lg text-gray-400">{project.role}</p>
      
      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-8">
        <video
          className="w-full h-full object-cover"
          src={project.video}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <p className="text-white/80">{project.description}</p>
    </main>
  );
}
