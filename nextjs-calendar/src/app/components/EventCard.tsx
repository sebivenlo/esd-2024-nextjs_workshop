// src/app/components/EventCard.tsx
import React from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  description?: string;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="p-2 bg-blue-100 rounded-md shadow-md">
      <h3 className="text-sm font-semibold text-blue-800">{event.title}</h3>
      <p className="text-xs text-gray-700">{event.description || "No description"}</p>
    </div>
  );
}
