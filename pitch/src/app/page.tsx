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
  Server,
  Code,
  ImageIcon,
  Palette,
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
  {
    title: "Server-Side Rendering",
    description: "Fetch data on every request.",
    icon: Server,
    gradient: "from-red-500 to-pink-500",
    details:
      "Server-side Rendering is the pre-rendering method that generates the HTML on each request. It's perfect for pages with frequently updated data or user-specific content.",
    code: `// src/app/profile/[id]/page.tsx
import { notFound } from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function ProfilePage({ params }: { params: { id: string } }) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${params.id}\`);

  if (!res.ok) {
    return notFound();
  }

  const user: User = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">{user.name}'s Profile</h1>
        <p className="text-xl mb-4">Email: {user.email}</p>
        <p className="text-lg">User ID: {user.id}</p>
      </section>
    </div>
  );
}`,
    link: "/profile/1", // Link to the actual implemented SSR route
  },
  {
    title: "API Routes",
    description: "Create backend endpoints directly in the Next.js app.",
    icon: Code,
    gradient: "from-indigo-500 to-blue-500",
    details:
      "API Routes provide a solution to build your API with Next.js. Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.",
    code: `// src/app/api/hello.tsx
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}`,
    link: "/api/hello", // Link to the actual API route
  },
  {
    title: "Image Optimization",
    description:
      "Images are automatically optimized in Next.js, ensuring optimal loading performance by resizing and compressing images.",
    icon: ImageIcon,
    gradient: "from-orange-500 to-yellow-500",
    details:
      "Next.js provides an Image component that automatically optimizes images. It resizes, optimizes, and serves images in modern formats like WebP when the browser supports it.",
    code: `// src/app/gallery/page.tsx
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500 flex flex-col justify-center items-center text-white p-20">
      <h1 className="text-5xl font-bold mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
          src="/images/photo1.jpg"
          alt="Sample Image 1"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/images/photo2.jpg"
          alt="Sample Image 2"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/images/photo3.jpg"
          alt="Sample Image 3"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

// This is accessible at /gallery`,
    link: "/gallery", // Link to the gallery page with optimized images
  },
  {
    title: "CSS Support",
    description:
      "Next.js supports various CSS solutions, including Tailwind CSS, providing flexibility for styling.",
    icon: Palette,
    gradient: "from-green-500 to-blue-500",
    details:
      "Tailwind CSS offers a utility-first approach to styling, making it easy to build responsive and modern interfaces in Next.js without writing custom CSS files.",
    code: `// src/app/tailwind-example/page.tsx
export default function TailwindExample() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center items-center text-white p-10">
      <h1 className="text-5xl font-bold mb-6">Tailwind CSS Support</h1>
      <p className="text-lg mb-8 text-center">
        This page is styled entirely with Tailwind CSS, showcasing its utility-first approach.
      </p>
      <button className="bg-white text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded transition duration-300">
        Click Me
      </button>
    </div>
  );
}

// This is accessible at /tailwind-example`,
    link: "/tailwind", // Link to the actual implemented Tailwind page
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
