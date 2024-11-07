// src/app/page.tsx
"use client";
import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import CalendarGrid from "./components/CalendarGrid";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  return (
    <main className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center w-full max-w-2xl mb-8">
        <button onClick={handlePrevMonth} className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
          Previous
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth} className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
          Next
        </button>
      </header>

      <CalendarGrid currentDate={currentDate} />
    </main>
  );
}
