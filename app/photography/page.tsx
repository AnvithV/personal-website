'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photography() {
  // You can add your photos here
  const photos = [
    // Example structure - replace with your actual photos
    // { src: "/photography/photo1.jpg", title: "Sunset at Beach", description: "A beautiful sunset captured at Santa Cruz" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Photography
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Capturing moments through my lens
          </motion.p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative w-full h-full cursor-pointer">
                {/* Add your photos here */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold">{photo.title}</h3>
                    <p className="mt-2">{photo.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions Message */}
        <motion.div
          className="text-center mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-300">
            Add your photos to the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">public/photography</code> directory
            and update the photos array in this component to display them.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 