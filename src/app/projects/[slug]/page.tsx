/* eslint-disable @typescript-eslint/no-unused-vars */
// import { notFound } from 'next/navigation';
// import { projects } from '@/data/projects';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>Project: {slug}</h1>
    </div>
  );
}
