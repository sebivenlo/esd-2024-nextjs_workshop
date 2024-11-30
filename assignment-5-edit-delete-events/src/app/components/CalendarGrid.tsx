'use client'

import React from "react";
import { format, startOfMonth, endOfMonth, addDays } from "date-fns";
import Link from "next/link";
import EventCard from "./EventCard";

interface CalendarGridProps {
  currentDate: Date;
  events: { id: string; title: string; date: string; description: string }[];
}

export default function CalendarGrid({ currentDate, events }: CalendarGridProps) {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  const days = [];
  for (let day = start; day <= end; day = addDays(day, 1)) {
    // Filter events that match the current day
    const dayEvents = events.filter(
      (event) => event.date === format(day, "yyyy-MM-dd")
    );

    // Create day grid elements
    days.push(
      <div
        key={day.toString()}
        className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-200"
      >
        <div className="text-lg font-medium text-gray-800">{format(day, "d")}</div>
        <div className="mt-2 text-sm text-gray-600">
          {dayEvents.map((event) => (
              <EventCard key={event.id} id={event.id} title={event.title} date={event.date} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-7 gap-4 w-full max-w-2xl mt-6">
      {days}
    </div>
  );
}
