import projects from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-10 text-black">
        <h1 className="text-3xl font-bold">Page doesn’t exist</h1>
        <p className="mt-4">We couldn’t find a project with the slug “{slug}”.</p>
      </div>
    );
  }

  return (
    <div className="p-10 text-black">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-2 text-black">{project.role}</p>
      <video
        src={project.video}
        controls
        className="mt-6 w-full max-w-4xl rounded-lg shadow-lg"
      />
      
    </div>
  );
}
