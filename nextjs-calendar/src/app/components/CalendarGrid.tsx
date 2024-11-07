// src/app/components/CalendarGrid.tsx
"use client";
import React from "react";
import { format, startOfMonth, endOfMonth, addDays } from "date-fns";
import EventCard from "./EventCard";

interface CalendarGridProps {
  currentDate: Date;
}

export default function CalendarGrid({ currentDate }: CalendarGridProps) {
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);

  const days = [];
  for (let day = start; day <= end; day = addDays(day, 1)) {
    days.push(
      <div
        key={day.toString()}
        className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-200"
      >
        <div className="text-lg font-medium text-gray-800">{format(day, "d")}</div>
        {/* Event cards will be displayed here */}
        <div className="mt-2 text-sm text-gray-600">
          <EventCard event={{ id: "1", title: "Sample Event", date: day.toISOString() }} />
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
