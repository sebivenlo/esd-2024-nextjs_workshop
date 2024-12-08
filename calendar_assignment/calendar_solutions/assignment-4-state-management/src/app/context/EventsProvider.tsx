'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface EventsContextType {
  events: Event[];
  addEvent: (event: Event) => void; // TODO: Implement logic
  updateEvent: (id: string, updatedEvent: Event) => void; // TODO: Implement logic
  deleteEvent: (id: string) => void; // TODO: Implement logic
}

const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <EventsContext.Provider
      value={{
        events,
        addEvent: () => {}, // Placeholder
        updateEvent: () => {}, // Placeholder
        deleteEvent: () => {}, // Placeholder
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return context;
};
