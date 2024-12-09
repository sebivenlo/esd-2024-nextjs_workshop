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

📖 **Resource**: [Next.js Routing Documentation](https://nextjs.org/docs/app/building-your-application/routing)

---

### **2. Create a Home Page**
- Add a new file: `src/app/page.tsx`.
- Create a basic React component for the home page.
- Style the page using Tailwind CSS.

##### Example (not complete):
```tsx
// src/app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      {/* Add more elements and style them with Tailwind */}
    </div>
  );
}
```

🔗 **Resources**:
- Learn React components: [React Components Documentation](https://react.dev/learn/your-first-component)
- Tailwind utilities: [Tailwind CSS Docs](https://tailwindcss.com/docs)

💡 **Hint**: Use classes like `text-xl`, `font-bold`, or `p-4` to style your elements.

---

### **3. Create an About Page**
- Add a new file: `src/app/about/page.tsx`.
- Create a simple React component with an `<h1>` and a short description.
- Apply Tailwind CSS for styling.

##### Example (incomplete):
```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      {/* Add a short description and style it */}
    </div>
  );
}
```

💡 **Hint**: Start simple with text styling like `text-center` and gradually add spacing or colors.

📖 **Resource**: [Next.js App Directory Overview](https://nextjs.org/docs/app/building-your-application/routing)

---

### **4. Navigation with the Link Component**
- Create a new file: `src/components/Navbar.tsx`.
- Build a `Navbar` component with navigation links using `Link` from `next/link`.
- Add links to the Home and About pages.

##### Example (incomplete):
```tsx
// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* Add a second link for the About page */}
      </ul>
    </nav>
  );
}
```

📖 **Resource**: [Next.js `Link` Component](https://nextjs.org/docs/api-reference/next/link)

---

### **5. Add Navbar to Layout**
- Update the layout file: `src/app/layout.tsx`.
- Include the `Navbar` component so it appears on all pages.

##### Example (incomplete):
```tsx
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* Add the children here */}
      </body>
    </html>
  );
}
```

💡 **Hint**: Ensure the `Navbar` is placed above `{children}` to persist across pages.

📖 **Resource**: [Next.js Layout Documentation](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

---

## **Hints and Resources**

### Common Challenges
- **Routes Not Working?**
  - Double-check your file structure.
  - For example, `src/app/about/page.tsx` should result in `/about`.

### Resources
1. [Next.js Routing Basics](https://nextjs.org/docs/app/building-your-application/routing)
2. [Tailwind CSS Basics](https://tailwindcss.com/docs/installation)
3. [React Beginner’s Guide](https://react.dev/learn)

---

## **Checklist**
- [ ] Create a Home Page (`src/app/page.tsx`).
- [ ] Add an About Page (`src/app/about/page.tsx`).
- [ ] Build a `Navbar` component with links to both pages.
- [ ] Add the `Navbar` to the layout (`src/app/layout.tsx`).
- [ ] Style the components using Tailwind CSS.

---

[Main README](../../README.md) | [Next Assignment →](Assignment-2.md)
