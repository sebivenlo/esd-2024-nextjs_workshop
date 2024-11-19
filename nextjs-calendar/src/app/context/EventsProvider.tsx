"use client";
import React, { useState, useEffect, createContext, useContext, ReactNode } from "react";

// Define types for your events
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

// Define the shape of the context data
interface EventsContextType {
  events: Event[];
  addEvent: (newEvent: Event) => void;
  updateEvent: (id: string, updatedEvent: Event) => void;
  deleteEvent: (id: string) => void;
}

// Default value for the context
const defaultContextValue: EventsContextType = {
  events: [],
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {},
};

// Create the context with the default value
const EventsContext = createContext<EventsContextType>(defaultContextValue);

// Custom hook to use the EventsContext
export const useEvents = () => useContext(EventsContext);

// EventsProvider component to provide the context
interface EventsProviderProps {
  children: ReactNode;
}

export const EventsProvider: React.FC<EventsProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);

  // Load events from localStorage on mount
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setEvents(savedEvents);
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  const addEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const updateEvent = (id: string, updatedEvent: Event) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === id ? updatedEvent : event))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
};

