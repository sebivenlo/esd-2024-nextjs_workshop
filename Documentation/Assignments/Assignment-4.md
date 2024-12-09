# **Assignment 4: Fetching and Displaying Data**

## **Learning Objectives**
- Learn how to fetch data in Next.js.
- Understand the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG).
- Display dynamic data on a page.

---

## **Step-by-Step Guide**

### **1. Create a Users Page**
- Add a new file: `src/app/users/page.tsx`.
- Fetch user data from `https://jsonplaceholder.typicode.com/users` using `fetch`.

##### Example (incomplete):
```tsx
// src/app/users/page.tsx
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {/* Map through users and display their names */}
      </ul>
    </div>
  );
}
```

💡 **Hints**:
- Use `map()` to iterate through the user list and render their names.
- Add basic styles like `p-4` or `bg-gray-100` for a clean layout.

🔗 **Resources**:
- Fetching data in Next.js: [Next.js Data Fetching Guide](https://nextjs.org/docs/data-fetching)
- Free API: [JSONPlaceholder Users Endpoint](https://jsonplaceholder.typicode.com/users)

---

### **2. Create a Blog Page with SSG**
- Add a new file: `src/app/blog/page.tsx`.
- Fetch blog data from `https://jsonplaceholder.typicode.com/posts` using static generation.

##### Example (incomplete):
```tsx
// src/app/blog/page.tsx
export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul>
        {/* Render a few post titles */}
      </ul>
    </div>
  );
}
```

💡 **Hints**:
- Render only a few posts (e.g., the first 5) for simplicity using `.slice(0, 5)`.
- Use Tailwind classes like `text-blue-600` for better typography.

🔗 **Resources**:
- Learn about Static Site Generation: [Next.js SSG Documentation](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops)
- Free API: [JSONPlaceholder Posts Endpoint](https://jsonplaceholder.typicode.com/posts)

---

### **3. Enable Incremental Static Regeneration (ISR)**
- Update the blog page to regenerate at regular intervals by adding a `revalidate` option.

##### Example:
```tsx
export const revalidate = 60; // Revalidate every 60 seconds
```

💡 **Hints**:
- Add `export const revalidate` at the top level of the page to enable ISR.
- Use `console.log` to debug and verify the data re-fetching.

🔗 **Resource**: [Next.js ISR Guide](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)

---

### **4. Style the Pages**
- Use Tailwind CSS to style the Users and Blog pages.
- Add a `Back to Home` link at the bottom of each page.

💡 **Hints**:
- Use Tailwind classes like `bg-gray-100`, `text-lg`, or `shadow-lg` to improve layout.
- Create a reusable `BackLink` component for navigation.

🔗 **Resources**:
- Tailwind CSS: [Styling Basics](https://tailwindcss.com/docs)
- Next.js Navigation: [Next.js Link Documentation](https://nextjs.org/docs/api-reference/next/link)

---

## **Hints and Resources**

### Common Challenges
- **Data Not Displaying?**
  - Ensure the API endpoint is correct.
  - Use `console.log` to debug API responses.
- **Empty Page?**
  - Confirm that `fetch` responses are parsed with `.json()`.

### Resources
1. [Next.js Data Fetching](https://nextjs.org/docs/data-fetching)
2. [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
3. [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## **Checklist**
- [ ] Create a `Users` page that fetches data using SSR.
- [ ] Create a `Blog` page that uses SSG.
- [ ] Enable ISR for the `Blog` page to revalidate data at intervals.
- [ ] Apply Tailwind CSS for styling.
- [ ] Add a `Back to Home` link to each page.

---

[← Previous Assignment](Assignment-3.md) | [Main README](../../README.md) 