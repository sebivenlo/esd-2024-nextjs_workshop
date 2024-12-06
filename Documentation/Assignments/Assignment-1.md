# **Assignment 1: Basic Routing and Components**

## **Learning Objectives**
- Learn how to create routes using the file system.
- Build basic pages with React components.
- Use `Link` for navigation.
- Style components with Tailwind CSS.

---

## **Step-by-Step Guide**

### **1. File-Based Routing**
Next.js uses the file system to define routes. For example:
- `/app/page.tsx` → `/`
- `/app/about/page.tsx` → `/about`

---

### **2. Create a Home Page**
- Add a `src/app/page.tsx` file.
- Create a basic component that welcomes users.
- Style the page with Tailwind CSS.

##### Example (not complete):
```tsx
// src/app/page.tsx
export default function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      {/* Add more content here */}
    </div>
  );
}
```

---

### **3. Create an About Page**
- Add a file: `src/app/about/page.tsx`.
- Include a `<h1>` and a short description.
- Use Tailwind CSS for styling.

---

### **4. Navigation with the Link Component**
- Create a `Navbar` component in `src/components/Navbar.tsx`.
- Use `Link` from `next/link` to navigate between Home and About pages.

##### Example (not complete):
```tsx
// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
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

### **5. Add Navbar to Layout**
- Update `src/app/layout.tsx` to include your `Navbar` at the top of every page.

##### Hint:
Wrap the `Navbar` around `{children}` in the layout.

---

## **Hints and Resources**
### Common Challenges
- **Routes Not Working?**: Double-check file structure.
- **Tailwind Not Applying?**: Restart the dev server and ensure Tailwind is installed.

### Resources
- [Next.js Routing Documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## **Checklist**
- [ ] Create a Home Page (`/`).
- [ ] Add an About Page (`/about`).
- [ ] Implement navigation using `Link`.
- [ ] Add a `Navbar` component.
- [ ] Style the pages using Tailwind CSS.

---

[Main README](../../README.md) | [Next Assignment →](Assignment-2.md)

