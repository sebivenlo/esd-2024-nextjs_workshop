# **Assignment 4: Fetching and Displaying Data**

## **Learning Objectives**
- Learn how to fetch data in Next.js.
- Understand the difference between Server-Side Rendering (SSR) and Static Site Generation (SSG).
- Display dynamic data on a page.

---

## **Step-by-Step Guide**

### **1. Create a Users Page**
- Add a new file: `src/app/users/page.tsx`.
- Fetch user data from `https://jsonplaceholder.typicode.com/users`.

##### Example (not complete):
```tsx
// src/app/users/page.tsx
export default async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <ul>
        {/* Render user names */}
      </ul>
    </div>
  );
}
```

---

### **2. Create a Blog Page with SSG**
- Add a new file: `src/app/blog/page.tsx`.
- Fetch blog data from `https://jsonplaceholder.typicode.com/posts`.

##### Hint:
Use a static data-fetching method to ensure the page is pre-rendered.

---

### **3. Enable Incremental Static Regeneration (ISR)**
- Update the blog page to regenerate at regular intervals.

##### Example:
```tsx
// src/app/blog/page.tsx
export async function generateStaticParams() {
  return { revalidate: 60 }; // Revalidate every 60 seconds
}
```

---

### **4. Style the Pages**
- Use Tailwind CSS to make the Users and Blog pages visually appealing.
- **Bonus**: Add a `Back to Home` link to each page.

---

## **Hints and Resources**
### Common Challenges
- **Data Not Displaying?**: Confirm the API endpoint is correct.
- **Empty Page?**: Ensure the fetch response is parsed with `.json()`.

### Resources
- [Next.js Data Fetching](https://nextjs.org/docs/data-fetching)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## **Checklist**
- [ ] Create a Users page and fetch data using SSR.
- [ ] Create a Blog page using SSG.
- [ ] Add ISR to the Blog page.
- [ ] Apply Tailwind CSS styling.

---

[← Previous Assignment](Assignment-3.md) | [Main README](../../README.md) | [Next Assignment →](Assignment-5.md)
