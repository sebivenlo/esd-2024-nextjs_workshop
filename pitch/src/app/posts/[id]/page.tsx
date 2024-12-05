"use client"; // This makes the component a Client Component

import { useParams } from "next/navigation";

export default function PostPage() {
  const params = useParams();
  const { id } = params; // Get the id from the URL

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-teal-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">Dynamic Post Page</h1>
        <p className="text-xl mb-8">This is the post with ID: {id}</p>
        <p className="text-lg">
          In this route, you can fetch data based on the dynamic parameter{" "}
          <strong>{id}</strong> and display content accordingly.
        </p>
      </section>
    </div>
  );
}
