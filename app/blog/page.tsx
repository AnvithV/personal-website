import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, technology, and more",
};

export default function Blog() {
  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "DevOps",
    "Career",
  ];

  const posts = [
    {
      title: "Getting Started with Next.js 13 and App Router",
      excerpt:
        "Learn how to build modern web applications with Next.js 13's revolutionary App Router and server components.",
      date: "March 1, 2024",
      category: "Web Development",
      readTime: "5 min read",
      slug: "getting-started-nextjs-13",
    },
    {
      title: "Best Practices for React Performance Optimization",
      excerpt:
        "Discover practical techniques and strategies to optimize your React applications for better performance.",
      date: "February 15, 2024",
      category: "Web Development",
      readTime: "8 min read",
      slug: "react-performance-optimization",
    },
    {
      title: "Introduction to DevOps: A Beginner's Guide",
      excerpt:
        "Understanding the basics of DevOps and how it can improve your development workflow.",
      date: "February 1, 2024",
      category: "DevOps",
      readTime: "6 min read",
      slug: "intro-to-devops",
    },
    {
      title: "Building Your Career in Software Development",
      excerpt:
        "Tips and advice for growing your career as a software developer in today's competitive industry.",
      date: "January 15, 2024",
      category: "Career",
      readTime: "7 min read",
      slug: "career-in-software-development",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Thoughts, tutorials, and insights about software development.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium
                bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-black dark:text-white font-medium hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Subscribe to my newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest posts and updates delivered straight to your inbox.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
                bg-white dark:bg-gray-800"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black 
                rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 
                transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 