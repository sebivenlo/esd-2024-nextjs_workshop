'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useEvents } from "../../context/EventsProvider";
import { Event } from "../../context/EventsProvider";

const EventPage = () => {
  const { events } = useEvents();
  const [event, setEvent] = useState<Event | null>(null);
  const { id } = useParams();
  console.log("Event ID from URL:", id); // Log the ID from URL

  useEffect(() => {
    if (id && typeof id === 'string') {
      const decodedId = decodeURIComponent(id);  // Decode the URL-encoded ID
      console.log("Decoded Event ID:", decodedId); // Log the decoded ID

      const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
      console.log("Loaded events from localStorage:", savedEvents); // Log the loaded events
      const foundEvent = savedEvents.find((e: Event) => e.id === decodedId); // Find event by decoded ID
      console.log("Found event from localStorage:", foundEvent); // Log found event
      setEvent(foundEvent ?? null); // Set the found event or null if not found
    }
  }, [id]);  // Run this effect when `id` changes

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{event.title}</h1>
        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
      </div>

      <div className="space-y-4">
        <p className="text-lg text-gray-700">{event.description}</p>
      </div>

      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Edit Event
        </button>
      </div>
    </div>
  );
};

export default EventPage;
