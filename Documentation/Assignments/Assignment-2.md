# **Assignment 2: Server-Side Rendering and Data Fetching**

## **Learning Objectives**
1. Understand **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**.
2. Learn how to fetch and display data using Next.js features.
3. Implement **Incremental Static Regeneration (ISR)** for dynamic updates.

---

## **Step-by-Step Guide**

### **1. Server-Side Rendering (SSR)**

#### **What is SSR?**
Server-Side Rendering generates HTML for each request, fetching data on the server. This is useful for dynamic data that changes frequently.

#### **Task: Create a Users Page**
1. Create a file: `src/app/users/page.tsx`.
2. Use the `getServerSideProps`-like functionality with the modern **async function** to fetch user data.
3. Render the data in a list format.

##### Code Hint:
```tsx
// src/app/users/page.tsx
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul className="mt-4 space-y-2">
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id} className="text-gray-700">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### References:
- [Next.js Server-Side Rendering Documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-side-rendering)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

### **2. Static Site Generation (SSG)**

#### **What is SSG?**
Static Site Generation pre-renders HTML at build time. This is ideal for data that doesn’t change often, such as blog posts or marketing pages.

#### **Task: Create a Blog Page**
1. Create a file: `src/app/blog/page.tsx`.
2. Use `fetch` to pre-render blog post data at build time.
3. Render blog titles in a list.

##### Code Hint:
```tsx
// src/app/blog/page.tsx
export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="text-gray-700">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### References:
- [Next.js Static Site Generation Documentation](https://nextjs.org/docs/app/building-your-application/rendering/static-site-generation)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

### **3. Incremental Static Regeneration (ISR)**

#### **What is ISR?**
ISR updates static pages incrementally at runtime without requiring a full rebuild. This is useful for blogs, e-commerce sites, and other content that updates periodically.

#### **Task: Enable ISR for the Blog Page**
1. Modify your `src/app/blog/page.tsx` to include the `revalidate` option.
2. Set `revalidate` to 60 seconds, so the data updates once per minute.

##### Code Hint:
```tsx
// src/app/blog/page.tsx
export const revalidate = 60; // Revalidate the page every 60 seconds

export default async function BlogPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="text-gray-700">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### References:
- [Next.js ISR Documentation](https://nextjs.org/docs/pages/building-your-application/rendering/incremental-static-regeneration)

---

### **4. Error Handling**

#### **Why Handle Errors?**
Errors during data fetching can break your app. Handling errors ensures better user experience and debugging.

#### **Task: Add Error Handling**
1. Use a `try-catch` block to wrap your `fetch` calls.
2. Show an error message if the fetch fails.

##### Example:
```tsx
export default async function UsersPage() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Failed to fetch users');
    const users = await res.json();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <ul className="mt-4 space-y-2">
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id} className="text-gray-700">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4 text-red-600">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Unable to fetch user data. Please try again later.</p>
      </div>
    );
  }
}
```

#### References:
- [Error Handling in Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

---

## **Assignment Checklist**

- [ ] Create a **Users Page** using SSR.
- [ ] Create a **Blog Page** using SSG.
- [ ] Enable ISR for the Blog Page with `revalidate`.
- [ ] Implement error handling for data fetching.
- [ ] Verify dynamic data updates using ISR.

---

## **Resources for this Assignment**

- **[Next.js Data Fetching Documentation](https://nextjs.org/docs/data-fetching)**
- **[JSONPlaceholder Mock API](https://jsonplaceholder.typicode.com/)**
- **[Guide to SSR and SSG](https://nextjs.org/docs/basic-features/pages)**
- **[Next.js Error Handling](https://nextjs.org/docs/api-reference/next/error-handling)**
