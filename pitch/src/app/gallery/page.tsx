// src/app/gallery/page.tsx
import Image from "next/image";

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
