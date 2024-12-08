'use client';
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useEvents } from "../../context/EventsProvider";
import { Event } from "../../context/EventsProvider";

const EventPage = () => {
  const { events, updateEvent, deleteEvent } = useEvents();
  const [event, setEvent] = useState<Event | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  const router = useRouter();

  // Load the event by ID
  useEffect(() => {
    if (id && typeof id === 'string') {
      const decodedId = decodeURIComponent(id);  // Decode the URL-encoded ID
      const foundEvent = events.find((e) => e.id === decodedId);
      setEvent(foundEvent ?? null); // Set the found event or null if not found
    }
  }, [id, events]);  // Re-run effect when `id` or `events` change

  const handleEdit = () => {
    setIsEditing(true);  // Toggle editing state
  };

  const handleUpdate = (updatedEvent: Event) => {
    if (event) {
      // Only update the event in context if it's a valid change
      updateEvent(event.id, updatedEvent);
      setIsEditing(false);  // Close the editing form
    }
  };

  const handleDelete = () => {
    if (event) {
      deleteEvent(event.id);  // Delete event from context
      router.push('/');  // Navigate to homepage or another page
    }
  };

  const handleGoBack = () => {
    router.back(); // Navigate back to the previous page
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleGoBack}
          className="text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          &#8592; Go Back
        </button>

        <div>
          <h1 className="text-4xl font-bold text-gray-800">{event.title}</h1>
          <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="space-y-4">
        {isEditing ? (
          <div>
            {/* Edit form */}
            <textarea
              value={event.description}
              onChange={(e) => setEvent({ ...event, description: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Edit event description"
            />
            <button
              onClick={() => handleUpdate(event)}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        ) : (
          <p className="text-lg text-gray-700">{event.description}</p>
        )}
      </div>

      <div className="mt-6 text-center space-x-4">
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Edit Event
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Cancel
          </button>
        )}

        <button
          onClick={handleDelete}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default EventPage;
