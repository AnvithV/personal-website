'use client';

import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Resume() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resume
          </motion.h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black 
                rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-black dark:border-white 
                rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Screen
            </motion.a>
          </div>
        </div>

        {/* PDF Viewer */}
        <motion.div
          className="w-full aspect-[8.5/11] rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
} 