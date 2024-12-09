## **Assignment 1: Basic Routing and Components**

### **1. Home Page**

**File:** `src/app/page.tsx`

```tsx
export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Welcome to the Next.js Workshop!</h1>
      <p className="mt-2">This is the Home page.</p>
    </div>
  );
}
```

---

### **2. About Page**

**File:** `src/app/about/page.tsx`

```tsx
export default function AboutPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-2">This is the About page of our workshop project.</p>
    </div>
  );
}
```

---

### **3. Navbar Component**

**File:** `src/components/Navbar.tsx`

```tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
```

---

### **4. Add Navbar to Layout**

**File:** `src/app/layout.tsx`

```tsx
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
```

---

## **Assignment 2: Server-Side Rendering (SSR) and Data Fetching**

### **1. SSR Page**

**File:** `src/app/ssr-example/page.tsx`

```tsx
export default async function SSRPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) => res.json());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Server-Side Rendered Data</h1>
      <h2 className="text-xl mt-4">{data.title}</h2>
      <p className="mt-2">{data.body}</p>
    </div>
  );
}
```

---

### **2. Update Navbar**

**File:** `src/components/Navbar.tsx`

```tsx
<li>
  <Link href="/ssr-example">SSR Example</Link>
</li>
```

---

## **Assignment 3: Event Handling and Forms**

### **1. EventForm Component**

**File:** `src/components/EventForm.tsx`

```tsx
'use client';

import { useState } from 'react';

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full border p-2"
        />
      </label>
      <label className="block mb-2">
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="block w-full border p-2"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full border p-2"
        ></textarea>
      </label>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
```

---

### **2. Add Event Form Page**

**File:** `src/app/add-event/page.tsx`

```tsx
import EventForm from '@/components/EventForm';

export default function AddEventPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add a New Event</h1>
      <EventForm />
    </div>
  );
}
```

---

### **3. Update Navbar**

**File:** `src/components/Navbar.tsx`

```tsx
<li>
  <Link href="/add-event">Add Event</Link>
</li>
```

---

## **Assignment 4: Fetching and Displaying Data**

### **1. Users Page**

**File:** `src/app/users/page.tsx`

```tsx
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mt-2">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### **2. Blog Page with SSG**

**File:** `src/app/blog/page.tsx`

```tsx
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="mt-2">
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### **3. Update Navbar**

**File:** `src/components/Navbar.tsx`

```tsx
<li>
  <Link href="/users">Users</Link>
</li>
<li>
  <Link href="/blog">Blog</Link>
</li>
```
