import { notFound } from "next/navigation";

// Define the type for user data
type User = {
  id: number;
  name: string;
  email: string;
};

// Export the page component as an async function for SSR
export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  // 1. Server-Side Data Fetching
  // Fetch the user data based on the dynamic ID parameter (`params.id`).
  // This fetch request happens on the server for every request to this page.
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  // 2. Handling Errors Server-Side
  // If the fetch request fails or the user is not found, the server returns a 404 page.
  if (!res.ok) {
    // The notFound() function triggers a 404 response and renders a 404 page.
    return notFound();
  }

  // 3. Parsing and Preparing Data on the Server
  // Parse the JSON response and prepare the user data.
  const user: User = await res.json();

  // 4. Rendering the Page on the Server
  // The HTML is generated using the fetched user data and sent to the client.
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-white p-20">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">{user.name}'s Profile</h1>
        <p className="text-xl mb-4">Email: {user.email}</p>
        <p className="text-lg">User ID: {user.id}</p>
      </section>
    </div>
  );
}
