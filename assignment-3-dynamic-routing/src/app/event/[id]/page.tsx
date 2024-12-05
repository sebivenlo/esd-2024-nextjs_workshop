'use client';

import { useParams } from 'next/navigation';

export default function EventPage() {
  const { id } = useParams(); // Get the ID from the URL

  const event = null; // TODO: Replace with fetched event data

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600">
        <strong>Date:</strong> {event.date}
      </p>
      <p className="mt-2">{event.description}</p>
    </div>
  );
}
