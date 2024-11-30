'use client';

import { useEvents } from './EventsContext';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function EventPage() {
  const { id } = useParams();
  const { events, updateEvent, deleteEvent } = useEvents();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <div>Event Not Found</div>;
  }

  const handleEdit = () => {
    setEditEvent(event); // TODO: Complete logic
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // TODO: Complete logic for updating the event
    setIsEditing(false);
  };

  const handleDelete = () => {
    // TODO: Complete logic for deleting the event
    router.push('/');
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editEvent?.title || ''}
            onChange={(e) =>
              setEditEvent({ ...editEvent, title: e.target.value })
            }
          />
          <textarea
            value={editEvent?.description || ''}
            onChange={(e) =>
              setEditEvent({ ...editEvent, description: e.target.value })
            }
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-600">
            <strong>Date:</strong> {event.date}
          </p>
          <p className="mt-2">{event.description}</p>
          <button onClick={handleEdit} className="mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="text-red-500">
            Delete
          </button>
        </>
      )}
    </div>
  );
}
