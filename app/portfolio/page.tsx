import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and work as a software engineer",
};

export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description:
        "A full-stack web application built with Next.js, TypeScript, and TailwindCSS. Features user authentication, real-time updates, and a responsive design.",
      image: "/project1.jpg",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
      demoLink: "https://project1.com",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Project Two",
      description:
        "A mobile-first web application that helps users track their daily tasks and goals. Built with React Native and Firebase.",
      image: "/project2.jpg",
      tags: ["React Native", "Firebase", "Redux"],
      demoLink: "https://project2.com",
      githubLink: "https://github.com/username/project2",
    },
    {
      title: "Project Three",
      description:
        "An API service built with Node.js and Express that provides real-time data processing and analytics.",
      image: "/project3.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://project3.com",
      githubLink: "https://github.com/username/project3",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of my recent projects and work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-medium hover:underline"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-medium hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-xl mb-4">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 