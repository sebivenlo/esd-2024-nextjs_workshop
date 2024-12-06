## **Assignment 1: Basic Routing and Components**

### Learning Objectives
- Learn how to create routes using the file system.
- Build basic pages with React components.
- Use `Link` for navigation.
- Style components with Tailwind CSS.

---

### **Step-by-Step Guide**

#### **1. File-Based Routing**
In Next.js 13+ (App Router), file structure defines routes:
- `/app/page.tsx` → `/`
- `/app/about/page.tsx` → `/about`
- `/app/products/[id]/page.tsx` → `/products/:id`

#### **2. Create a Home Page**
- In `src/app/page.tsx`, create a basic component that welcomes users.
- **Hint**: Use a `<h1>` element and style it with Tailwind CSS.  

##### Example (not complete):
```tsx
// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      {/* Add a brief welcome message */}
    </div>
  );
}
```

---

#### **3. Create an About Page**
- Add a file: `src/app/about/page.tsx`.
- Add a `<h1>` and a short description.
- **Hint**: Use Tailwind's `text-gray-700` for text styling.

---

#### **4. Navigation with the Link Component**
- Create a `Navbar` component in `src/components/Navbar.tsx`.
- Use `Link` from `next/link` to navigate between `/` and `/about`.

##### Code Hint:
```tsx
// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-4">
        {/* Add links to Home and About */}
      </ul>
    </nav>
  );
}
```

- **Bonus Hint**: Pass `className` to `Link` for Tailwind styling.

---

#### **5. Add Navbar to Layout**
- Update `src/app/layout.tsx` to include your `Navbar`.

##### Code Hint:
```tsx
// src/app/layout.tsx
import Navbar from '../components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Render page content */}
      </body>
    </html>
  );
}
```

---

### **Hints and Resources**

#### Common Challenges
- **Routes Not Working?**: Double-check file structure.
- **Tailwind Not Applying?**: Restart the dev server.
- **Broken Links?**: Ensure paths in `<Link>` match your routes.

#### Resources
- [Next.js Routing Documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

### **Assignment Checklist**
- [ ] Create a Home Page (`/`)
- [ ] Add an About Page (`/about`)
- [ ] Implement navigation with `Link`.
- [ ] Add a `Navbar` component to the layout.
- [ ] Apply basic Tailwind styling.

