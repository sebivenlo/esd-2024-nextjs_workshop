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
  const router = useRouter();  // For navigating after deletion

  // Load the event by id when the page loads or id changes
  useEffect(() => {
    if (id && typeof id === 'string') {
      const decodedId = decodeURIComponent(id);  // Decode the URL-encoded ID
      console.log("Decoded Event ID:", decodedId); // Log the decoded ID

      const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
      console.log("Loaded events from localStorage:", savedEvents); // Log the loaded events
      const foundEvent = savedEvents.find((e: Event) => e.id === decodedId); // Find event by decoded ID
      console.log("Found event from localStorage:", foundEvent); // Log found event
      setEvent(foundEvent ?? null); // Set the found event or null if not found
    }
  }, [id]);  // Run this effect when `id` changes

  const handleEdit = () => {
    console.log("Edit button clicked");
    setIsEditing(true);  // Toggle editing state
  };

  const handleUpdate = (updatedEvent: Event) => {
    console.log("Update button clicked with event:", updatedEvent);  // Log the updated event
    if (event) {
      updateEvent(event.id, updatedEvent);  // Update the event in context
      // Ensure updated events are saved to localStorage
      const updatedEvents = events.map((e) =>
        e.id === event.id ? updatedEvent : e
      );
      localStorage.setItem("events", JSON.stringify(updatedEvents));  // Save updated events to localStorage
      setIsEditing(false);  // Close the editing form
      console.log("Event updated in context and localStorage");
    }
  };

  const handleDelete = () => {
    console.log("Delete button clicked for event with ID:", event?.id);  // Log event ID to delete
    if (event) {
      deleteEvent(event.id);  // Delete the event from context
      // Remove the event from localStorage
      const updatedEvents = events.filter((e) => e.id !== event.id);
      localStorage.setItem("events", JSON.stringify(updatedEvents));  // Save updated events to localStorage
      router.push('/');  // Navigate to the homepage or another page after deletion
      console.log("Event deleted, redirecting...");
    }
  };

  if (!event) {
    console.log("Event not found, displaying 'Event not found' message");
    return <div>Event not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{event.title}</h1>
        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
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
