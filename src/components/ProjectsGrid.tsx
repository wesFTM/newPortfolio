'use client';
import React from 'react';
import Link from 'next/link';

const projects = [
  {
    slug: 'the-general',
    title: 'The General Sound Studio Live',
    role: 'Lead Designer, Motion Graphics, Video Editing, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/theGeneral.mp4',
  },
  {
    slug: 'abi',
    title: 'Anheuser Busch Reventon de Verano',
    role: 'Lead Designer, Motion Graphics, Interactive Video, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/reventon.mp4',
  },
  {
    slug: 'bacardi',
    title: 'Casa Bacardi',
    role: 'Lead Designer, Motion Graphics, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/bacardi_1.mp4',
  },
  {
    slug: 'greygoose',
    title: 'Grey Goose Essences - In Bloom ',
    role: 'Lead Designer, Motion Graphics, AR',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/greygoose.mp4',
  },
  {
    slug: 'grubhub',
    title: 'Grubhub Soundbites',
    role: 'Lead Designer, Motion Graphics, Video Editing, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/grubhub.mp4',
  },
  {
    slug: 'michelob',
    title: 'Michelob Ultra Movement Live',
    role: 'Lead Designer, Motion Graphics, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/michelob.mp4',
  },
  {
    slug: 'ftlive',
    title: 'FT Live - Analytics and Insights Platform',
    role: 'Lead Designer, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/ft_live.mp4',
  },
  {
    slug: 'southwest',
    title: 'Southwest Hawaii Heartbeats',
    role: 'Lead Designer, Motion Graphics, Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/southwest.mp4',
  },
  {
    slug: 'pickleball',
    title: 'Inaugural Pickleball Slam',
    role: 'Lead Designer, Motion Graphics, Video Editing Frontend',
    video: 'https://pub-040eb69763f14186b11b39e2584847be.r2.dev/pickleball.mp4',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block overflow-hidden rounded-lg border border-white/10 hover:border-white transition"
          >
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-70 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-white/80 group-hover:text-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm font-semibold">{project.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
