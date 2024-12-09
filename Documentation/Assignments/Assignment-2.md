# **Assignment 2: Server-Side Rendering (SSR) and Data Fetching**

## **Learning Objectives**
- Understand SSR in Next.js.
- Learn how to fetch data during server-side rendering.
- Display fetched data on a page.

---

## **Step-by-Step Guide**

### **1. What is SSR?**
Server-Side Rendering (SSR) means generating the HTML for a page on the server at request time. In Next.js, you achieve this using server-rendered functions.

📖 [Read the Next.js SSR Documentation](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

---

### **2. Create a Page with SSR**
- Add a new route: `src/app/ssr-example/page.tsx`.
- Fetch data using the `fetch` API.

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

🔗 **Resources**:  
- Learn about fetching data in Next.js: [Next.js Data Fetching Guide](https://nextjs.org/docs/basic-features/data-fetching)  
- Use this free API for data: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

### **3. Customize the Page**
- Fetch and display additional data (e.g., more fields from the API).
- Style the page with Tailwind CSS to make it visually appealing.
- Display a loading indicator or placeholder for better user experience during data fetching.

💡 **Tips for Styling with Tailwind**:  
- Refer to the [Tailwind CSS Documentation](https://tailwindcss.com/docs) for utilities.
- Experiment with spacing, fonts, and colors to design your page.

---

### **4. Add a Link in the Navbar**
- Update the `Navbar` component in `src/components/Navbar.tsx` to include a link to the SSR example.

##### Example:
```tsx
<li>
  <Link href="/ssr-example">SSR Example</Link>
</li>
```

📖 **Resource**: [Next.js `Link` Component Documentation](https://nextjs.org/docs/api-reference/next/link)

---

## **Hints and Resources**

### Common Challenges
- **Data Not Displaying?**
  - Double-check the API URL.
  - Use browser developer tools or `console.log` to debug errors.

- **Styling Issues?**
  - Ensure Tailwind CSS is correctly configured.
  - Restart the dev server after any changes to Tailwind settings.

### Resources
1. **Next.js SSR**: [Next.js SSR Documentation](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
2. **JSONPlaceholder**: [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
3. **Tailwind CSS**: [Tailwind CSS Docs](https://tailwindcss.com/docs)
4. **Debugging in Next.js**: [Next.js Debugging Guide](https://nextjs.org/docs/advanced-features/error-handling)

---

## **Checklist**
- [ ] Create an SSR page that fetches data from the API.
- [ ] Display fetched data on the page (e.g., title, body, etc.).
- [ ] Style the page using Tailwind CSS.
- [ ] Add a link to the SSR page in the `Navbar`.

---

[← Previous Assignment](Assignment-1.md) | [Main README](../../README.md) | [Next Assignment →](Assignment-3.md)
