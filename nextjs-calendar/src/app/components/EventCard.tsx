// src/app/components/EventCard.tsx
'use client'

import Link from "next/link";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
}

export default function EventCard({ id, title, date }: EventCardProps) {
  return (
    <Link href={`/event/${id}`} passHref>
      <div className="p-2 bg-blue-100 rounded-md hover:bg-blue-200 transition cursor-pointer">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </Link>
  );
}
