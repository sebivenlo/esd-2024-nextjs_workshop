# NextJS Workshop 

## Prerequisites and Setup
### Required Knowledge
- HTML/CSS fundamentals
- No prior React or NextJS experience required

## Workshop Learning Path

### 1. Understanding the Basics: What is NextJS?

#### Key Concepts Explanation
- **NextJS**: A React framework that provides:
  - Server-Side Rendering (SSR)
  - Static Site Generation (SSG)
  - Built-in routing
  - Performance optimization
  - Simplified deployment

#### Why NextJS?
- Faster initial page load
- Better SEO
- Easier routing
- Built-in performance optimizations
- Simplified full-stack development

### Resource Links for Beginners
- [NextJS Official Documentation](https://nextjs.org/docs)
- [React Fundamentals](https://react.dev/learn)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Project Structure Overview
```
nextjs-workshop/
├── app/                # Page and route components
│   ├── page.js         # Home page
│   ├── about/
│   │   └── page.js     # About page
│   └── products/
│       └── page.js     # Products page
├── components/         # Reusable React components
├── public/             # Static assets
├── styles/             # CSS files
├── Dockerfile          # Docker configuration
└── docker-compose.yml  # Docker compose setup
```

## Assignment 1: Basic Routing and Components

### Learning Objectives
- Understand NextJS file-based routing
- Create basic pages
- Use React components
- Apply basic styling with Tailwind

### Step-by-Step Guide

#### 1. Understanding File-Based Routing
In NextJS 13+, routing is based on file structure:
- `app/page.js` → `/`
- `app/about/page.js` → `/about`
- `app/products/page.js` → `/products`

#### 2. Create Home Page (app/page.js)
```jsx
export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Our NextJS Workshop!
      </h1>
      <p className="mt-4 text-gray-700">
        Let's learn NextJS together step by step.
      </p>
    </div>
  );
}
```

#### 3. Create About Page (app/about/page.js)
```jsx
export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <p className="mt-4">
        We are learning NextJS and exploring its amazing features!
      </p>
    </div>
  );
}
```

#### 4. Create Navigation Component (components/Navbar.js)
```jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}
```

#### 5. Update Layout (app/layout.js)
```jsx
import './globals.css'
import Navbar from '../components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

### Common Beginner Challenges
- **Routing Confusion**: Remember, each `page.js` creates a route
- **Component Import**: Double-check import paths
- **Tailwind Classes**: Refer to Tailwind documentation for styling

### Hints and Tips
- Use `className` instead of `class` in React
- NextJS uses React components with `export default function`
- Links are created using `next/link`

### Learning Resources
- [NextJS Routing Tutorial](https://nextjs.org/docs/app/building-your-application/routing)
- [Tailwind CSS Cheatsheet](https://nerdcave.com/tailwind-cheat-sheet)
- [React Components Explained](https://react.dev/learn/your-first-component)

## Troubleshooting
1. Ensure all imports are correct
2. Check file naming (must be lowercase)
3. Restart Docker container if changes don't appear

### Common Error Solutions
- **Empty Page**: Verify `export default` is used
- **Styling Not Working**: Confirm Tailwind setup
- **Routing Issues**: Check file structure matches URL

## Assignment Checklist
- [ ] Create Home Page
- [ ] Create About Page
- [ ] Implement Navigation
- [ ] Apply Basic Styling
- [ ] Test All Routes

### Estimated Time
- Setup: 15 minutes
- Coding: 30 minutes
- Troubleshooting: 15 minutes