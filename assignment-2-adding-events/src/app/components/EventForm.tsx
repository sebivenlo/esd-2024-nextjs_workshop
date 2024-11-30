'use client';

import React, { useState } from 'react';

interface EventFormProps {
  onSave: (event: { id: string; title: string; date: string; description: string }) => void;
}

export default function EventForm({ onSave }: EventFormProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // TODO: Implement handleSaveEvent
  const handleSaveEvent = () => {
    // Save the event and reset the form
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-4">Add New Event</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveEvent();
        }}
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Event
        </button>
      </form>
    </div>
  );
}
