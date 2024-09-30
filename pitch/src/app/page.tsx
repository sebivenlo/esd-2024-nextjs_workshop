"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  FolderTree,
  Link,
  Zap,
  Server,
  Database,
  Code,
  Layout,
  Palette,
  Image as ImageIcon,
  Folder,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "File-Based Routing",
    description: "Automatically generated routes from the file system.",
    icon: FolderTree,
    gradient: "from-blue-500 to-purple-500",
    details:
      "Next.js uses a file-system based router built on the concept of pages. When a file is added to the pages directory, it's automatically available as a route.",
    code: `// pages/about.js
export default function About() {
  return <h1>About Us</h1>

// This will be accessible at /about`,
  },

];

export default function Component() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r ${feature.gradient} text-white p-8`}
        >
          <div className="max-w-4xl w-full">
            <div className="flex items-center justify-between mb-4">
              <feature.icon className="w-12 h-12 text-white" />
              <button
                onClick={() =>
                  setExpandedFeature(expandedFeature === index ? null : index)
                }
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors duration-300"
              >
                {expandedFeature === index ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            <h2 className="text-4xl font-bold mb-2 text-center">
              {feature.title}
            </h2>
            <p className="text-center mb-4">{feature.description}</p>
            {expandedFeature === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <p className="mb-4">{feature.details}</p>
                <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
                  <code>{feature.code}</code>
                </pre>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
