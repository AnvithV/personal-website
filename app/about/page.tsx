import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Anvith - Software Engineer and Developer",
};

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "CI/CD"] },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Company Name",
      period: "2022 - Present",
      description: "Working on full-stack development using modern technologies.",
    },
    {
      title: "Software Developer Intern",
      company: "Company Name",
      period: "2021 - 2022",
      description: "Developed and maintained web applications using React and Node.js.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know more about my journey and expertise in software development.
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a software engineer with a passion for building innovative solutions
              that make a difference. With a background in computer science and years
              of hands-on experience, I specialize in creating efficient, scalable,
              and user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              blog posts and technical discussions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 