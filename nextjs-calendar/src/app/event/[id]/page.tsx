// src/app/event/[id]/page.tsx
'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EventPage() {
  const { id } = useParams(); // Extract the event ID from the URL
  const [event, setEvent] = useState<{ id: string; title: string; date: string; description: string } | null>(null);

  useEffect(() => {
    // Fetch the events from localStorage when the component loads
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      const events = JSON.parse(savedEvents);
      const currentEvent = events.find((event: { id: string }) => event.id === id);
      setEvent(currentEvent || null); // Set the event or null if not found
    }
  }, [id]); // Run the effect whenever the `id` changes

  if (!event) {
    return <div className="p-6 bg-gray-100 min-h-screen">Event not found</div>; // If event not found, display a message
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold">{event.title}</h1>
      <p className="text-gray-600">{event.date}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
}
