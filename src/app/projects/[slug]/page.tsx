// src/app/projects/[slug]/page.tsx

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
    </div>
  );
}
