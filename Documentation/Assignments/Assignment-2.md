# **Assignment 2: Server-Side Rendering and Data Fetching**

## **Learning Objectives**
1. Understand Server-Side Rendering (SSR) and Static Site Generation (SSG).
2. Learn how to fetch and display data using Next.js functions.
3. Implement Incremental Static Regeneration (ISR) for dynamic updates.

---

## **Step-by-Step Guide**

### **1. Server-Side Rendering (SSR)**
SSR allows you to fetch data on the server for every request.

#### **Task: Create a Users Page**
- Add a file: `src/app/users/page.tsx`.
- Use the `getServerSideProps` function to fetch user data.
- Display the fetched data in a list format.

##### Code Hint:
```tsx
// src/app/users/page.tsx
export default async function UsersPage() {
  // Fetch data from an API
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul className="mt-4">
        {/* Render user data */}
      </ul>
    </div>
  );
}
```
- **Hint**: Use `map()` to display user names.

---

### **2. Static Site Generation (SSG)**
SSG generates static HTML at build time, ideal for data that doesn’t change frequently.

#### **Task: Create a Blog Page**
- Add a file: `src/app/blog/page.tsx`.
- Use `getStaticProps` to fetch blog post data.
- Display the blog titles in a list.

##### Code Hint:
```tsx
// src/app/blog/page.tsx
export default async function BlogPage() {
  // Fetch blog posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      <ul className="mt-4">
        {/* Render blog posts */}
      </ul>
    </div>
  );
}
```

---

### **3. Incremental Static Regeneration (ISR)**
ISR allows you to update static pages at runtime without rebuilding the entire app.

#### **Task: Enable ISR**
- In your blog page, set a `revalidate` property for ISR.

##### Code Hint:
```tsx
// src/app/blog/page.tsx
export async function generateStaticParams() {
  return { revalidate: 60 }; // Revalidate every 60 seconds
}
```

---

### **4. Error Handling**
- Handle errors in both `getServerSideProps` and `getStaticProps`.
- **Hint**: Wrap your `fetch` call in `try-catch`.

##### Example Error Handling:
```tsx
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch data');
} catch (error) {
  console.error(error);
}
```

---

## **Hints and Resources**

### Common Beginner Challenges
- **Data Not Displaying?**: Confirm the API endpoint is correct.
- **Slow Fetching?**: Check network logs for errors.
- **Empty Page?**: Ensure the fetch response is parsed using `.json()`.

### Helpful Resources
- [Next.js Data Fetching Documentation](https://nextjs.org/docs/data-fetching)
- [JSONPlaceholder Mock API](https://jsonplaceholder.typicode.com/)
- [Understanding SSR and SSG](https://nextjs.org/docs/basic-features/pages)

---

## **Assignment Checklist**
- [ ] Create a Users Page with SSR.
- [ ] Create a Blog Page with SSG.
- [ ] Enable ISR for the Blog Page.
- [ ] Handle errors during data fetching.
- [ ] Verify that the data updates dynamically (for ISR).
