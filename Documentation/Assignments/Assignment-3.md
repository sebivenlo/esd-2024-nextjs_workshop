# **Assignment 3: API Routes and Middleware**

## **Learning Objectives**
1. Learn how to create custom API routes in Next.js.
2. Implement middleware for request handling.
3. Handle form submissions using API routes.

---

## **Step-by-Step Guide**

### **1. Creating API Routes**
API routes enable server-side logic in your app.

#### **Task: User Registration API**
- Create a file: `src/pages/api/register.ts`.
- Add an API handler function to process POST requests.

##### Code Hint:
```tsx
// src/pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    res.status(200).json({ message: `User ${name} registered with ${email}` });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```
- **Resource**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)

---

### **2. Implementing Middleware**
Middleware allows preprocessing of requests.

#### **Task: Authentication Middleware**
- Create middleware to check for an authentication token.
- Add a file: `src/middleware.ts`.

##### Code Hint:
```tsx
// src/middleware.ts
import { NextResponse } from 'next/server';

export default function middleware(req: Request) {
  const token = req.headers.get('Authorization');
  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  return NextResponse.next();
}
```
- **Resource**: [Middleware in Next.js](https://nextjs.org/docs/app/building-your-application/routing/middleware)

---

### **3. Handling Form Submissions**
Forms send data to API routes.

#### **Task: Create a Registration Form**
- Add a file: `src/app/register/page.tsx`.
- Use the `fetch` API to send form data to your `register.ts` API route.

##### Code Hint:
```tsx
// src/app/register/page.tsx
'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 mb-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2">
        Register
      </button>
    </form>
  );
}
```
- **Resource**: [Handling Forms in Next.js](https://react.dev/learn/choosing-the-state-structure)

---

## **Assignment Checklist**
- [ ] Create a registration API route.
- [ ] Implement authentication middleware.
- [ ] Build a form to submit data to the API.

