"use client";
import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, addMonths, subMonths, addDays } from "date-fns";

export default function CalendarPage() {
  // State for the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Functions to navigate months
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

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

      <CalendarGrid currentDate={currentDate} />
    </main>
  );
}

function CalendarGrid({ currentDate }: { currentDate: Date }) {
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
        {/* Placeholder for events */}
        <div className="mt-2 text-sm text-gray-600">
          <p>Sample Event</p>
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
