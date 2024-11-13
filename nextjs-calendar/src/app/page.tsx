// src/app/page.tsx
'use client'

import React, { useState, useEffect } from "react";
import { format, addMonths, subMonths } from "date-fns";
import CalendarGrid from "./components/CalendarGrid";
import EventForm from "./components/EventForm";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventForm, setShowEventForm] = useState(false);
  const [events, setEvents] = useState<{ id: string; title: string; date: string; description: string }[]>([]);

  // Load events from localStorage when the component mounts
  useEffect(() => {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const handleAddEvent = () => {
    setShowEventForm(true);
  };

  const handleSaveEvent = (event: { title: string; date: string; description: string }) => {
    const newEvent = {
      ...event,
      id: new Date().toISOString(), // Generate a unique id using the current timestamp
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents); // Add the new event to the events array
    localStorage.setItem("events", JSON.stringify(updatedEvents)); // Persist events in localStorage
    setShowEventForm(false);
  };

  return (
    <main className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center w-full max-w-2xl mb-8">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Previous
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">{format(currentDate, "MMMM yyyy")}</h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Next
        </button>
      </header>

      <CalendarGrid currentDate={currentDate} events={events} />

      <button
        onClick={handleAddEvent}
        className="mt-8 px-6 py-2 text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 transition-all duration-300"
      >
        Add Event
      </button>

      {showEventForm && (
        <EventForm onSave={handleSaveEvent} onClose={() => setShowEventForm(false)} />
      )}
    </main>
  );
}
