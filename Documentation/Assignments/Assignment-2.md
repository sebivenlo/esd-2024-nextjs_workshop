# **Assignment 2: Server-Side Rendering (SSR) and Data Fetching**

## **Learning Objectives**
- Understand SSR in Next.js.
- Learn how to fetch data during server-side rendering.
- Display fetched data on a page.

---

## **Step-by-Step Guide**

### **1. What is SSR?**
Server-Side Rendering (SSR) means generating the HTML for a page on the server at request time. In Next.js, you achieve this using the `getServerSideProps` function.

---

### **2. Create a Page with SSR**
- Add a new route: `src/app/ssr-example/page.tsx`.
- Fetch data using `getServerSideProps`.

##### Example (not complete):
```tsx
// src/app/ssr-example/page.tsx
export default async function SSRPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Server-Side Rendered Data</h1>
      {/* Display fetched data here */}
    </div>
  );
}
```

---

### **3. Customize the Page**
- Fetch and display additional data.
- Style the page with Tailwind CSS.
- Display a loading indicator or placeholder for better user experience.

---

### **4. Add a Link in the Navbar**
- Update the `Navbar` component to include a link to the SSR example.

##### Example:
```tsx
<li>
  <Link href="/ssr-example">SSR Example</Link>
</li>
```

---

## **Hints and Resources**
### Common Challenges
- **Data Not Displaying?**: Check the API URL and console for errors.
- **Styling Issues?**: Ensure Tailwind CSS classes are applied correctly.

### Resources
- [Next.js SSR Documentation](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## **Checklist**
- [ ] Create an SSR page that fetches data.
- [ ] Display fetched data on the page.
- [ ] Add a link to the SSR page in the `Navbar`.

---

[← Previous Assignment](Assignment-1.md) | [Main README](../../README.md) | [Next Assignment →](Assignment-3.md)
