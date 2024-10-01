"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FolderTree,
  LinkIcon,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "File-Based Routing",
    description: "Automatically generated routes from the file system.",
    icon: FolderTree,
    gradient: "from-blue-500 to-purple-500",
    details:
      "Next.js uses a file-system based router built on the concept of pages. When a file is added to the app directory, it's automatically available as a route.",
    code: `// src/app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Enterprise Software Development
        </h1>

        <h2 className="text-3xl font-semibold mb-4">Meet the Students</h2>
        <p className="text-xl mb-2">Julian KÖSER</p>
        <p className="text-xl mb-2">Kenan SEN</p>
      </section>
    </div>
  );
}

// This is accessible at /about`,
    link: "/about",
  },
  {
    title: "Dynamic Routes",
    description: "Create dynamic URLs using bracket notation.",
    icon: LinkIcon,
    gradient: "from-green-500 to-teal-500",
    details:
      "Dynamic routes allow you to create pages that can match multiple URLs. This is perfect for blog posts, product pages, or any content that follows a consistent structure but has dynamic data.",
    code: `// src/app/posts/[id]/page.tsx
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Dynamic Post Page</h1>
        <p className="text-xl mb-8">This is the post with ID: {id}</p>
        <p className="text-lg">
          In this route, you can fetch data based on the dynamic parameter
          <strong> {id} </strong> and display content accordingly.
        </p>
      </section>
    </div>
  );
}

// This is accessible at /posts/[id]`,
    link: "/posts/1", // Navigate to the dynamic route for post with id=1
  },
  {
    title: "Static Generation",
    description: "Pre-rendering pages at build time with fetched data.",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
    details:
      "Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request. It's great for pages that can be pre-rendered ahead of a user's request.",
    code: `// src/app/products/page.tsx
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/products')
  const products = await res.json()
  return { props: { products } }
}

export default function ProductsPage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}`,
    link: "/products", // Link to the actual static generation route
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
                {/* Use Link without <a> tag */}
                <Link href={feature.link}>
                  <button className="mt-4 inline-block bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300">
                    Go to {feature.title}
                  </button>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
