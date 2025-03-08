import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Anvith - Software Engineer at Cisco",
};

export default function About() {
  const skills = [
    { 
      category: "Technical Skills", 
      items: [
        "JavaScript/TypeScript",
        "React.js",
        "Node.js",
        "Python",
        "Java",
        "SQL",
        "AWS",
        "Docker",
        "Git",
        "REST APIs"
      ]
    },
    { 
      category: "Tools & Technologies", 
      items: [
        "VS Code",
        "GitHub",
        "JIRA",
        "Postman",
        "Linux/Unix"
      ]
    }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Cisco",
      period: "Aug 2023 - Present",
      location: "San Jose, CA",
      description: [
        "Working on full-stack development of enterprise applications",
        "Developing and maintaining cloud-native applications",
        "Collaborating with cross-functional teams to deliver high-quality solutions"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Cisco",
      period: "May 2023 - Aug 2023",
      location: "San Jose, CA",
      description: [
        "Developed and maintained web applications using modern technologies",
        "Collaborated with team members to implement new features",
        "Participated in code reviews and agile development processes"
      ]
    }
  ];

  const education = {
    degree: "Master of Science in Computer Science",
    school: "San Jose State University",
    period: "2022 - 2024",
    location: "San Jose, CA",
    gpa: "3.9/4.0"
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Software Engineer at Cisco, passionate about building innovative solutions.
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Background</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a Software Engineer at Cisco, where I work on full-stack development of enterprise applications
              and cloud-native solutions. Currently pursuing my Master's in Computer Science at San Jose State University,
              I combine academic excellence with practical industry experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              My focus is on building scalable, efficient, and user-friendly applications using modern technologies.
              I'm passionate about software development and constantly exploring new technologies to enhance my skills.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-2">{education.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {education.school} • {education.period}
            </p>
            <p className="text-gray-500 dark:text-gray-400">{education.location}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">GPA: {education.gpa}</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.title + exp.period}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.location}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-medium mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 