// src/app/page.tsx

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
    <main>
      <header>
        <button onClick={handlePrevMonth}>Previous</button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={handleNextMonth}>Next</button>
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
      <div key={day.toString()} className="calendar-day">
        <div>{format(day, "d")}</div>
        {/* Placeholder for events */}
        <div className="events">
          <p>Sample Event</p> {/* This will eventually be dynamic */}
        </div>
      </div>
    );
  }

  return <div className="calendar-grid">{days}</div>;
}

