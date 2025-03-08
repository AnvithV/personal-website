'use client';

import { motion } from "framer-motion";
import Link from "next/link";

// This would typically come from your MDX files
const posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    date: '2024-03-08',
    description: 'Learn how to build modern web applications with Next.js',
    tags: ['Next.js', 'React', 'Web Development']
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Thoughts, tutorials, and insights about software development
          </motion.p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            Add your blog posts as MDX files in the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">app/content/blog</code> directory.
            Each post should include frontmatter with title, date, description, and tags.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 