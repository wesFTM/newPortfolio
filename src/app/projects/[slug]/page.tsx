/* eslint-disable @typescript-eslint/no-unused-vars */
// import { notFound } from 'next/navigation';
// import { projects } from '@/data/projects';

import { FC } from 'react';
// src/app/projects/[slug]/page.tsx

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const { slug } = params;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
    </div>
  );
}
