import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-8 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Anvith"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Hi, I'm Anvith 👋
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              A passionate software engineer focused on building beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Latest Projects */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Latest Projects</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check out some of my recent work and side projects.
              </p>
              <Link
                href="/portfolio"
                className="text-black dark:text-white font-medium hover:underline"
              >
                View Projects →
              </Link>
            </div>

            {/* Blog Posts */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Read my thoughts on technology, development, and more.
              </p>
              <Link
                href="/blog"
                className="text-black dark:text-white font-medium hover:underline"
              >
                Read Blog →
              </Link>
            </div>

            {/* About Me */}
            <div className="bg-white dark:bg-black p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn more about my background, skills, and experience.
              </p>
              <Link
                href="/about"
                className="text-black dark:text-white font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
