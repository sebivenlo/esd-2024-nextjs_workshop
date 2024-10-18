# Beginner Next.js Workshop Cheat Sheet

## What is Next.js?

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) along with hybrid applications, offering optimized performance and SEO compared to traditional React apps that use client-side rendering (CSR).

### Traditional React App: Client-Side Rendering (CSR)
- **Client-Side Rendering (CSR)**: React apps render everything on the client side (browser). 
- **Cons**:
  - Interactive React content may be invisible to social media bots and search engines.
  - Slower time to first contentful paint (when the first bit of content is rendered on the screen).

### Next.js Approach
Next.js solves these issues by enabling **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Incremental Static Regeneration (ISR)**.

- **Server-Side Rendering (SSR)**: Content is pre-rendered on the server. When a bot or user requests a page, they get fully rendered HTML.
  - This improves **SEO** because search engines and bots can see pre-rendered content.
  - After the user receives the page, the client-side React code takes over, making the page interactive.

### Advantages of Next.js over Traditional React (CSR)
1. **SEO**: Fully rendered content is visible to bots and search engines.
2. **Performance**: SSR enables a faster **time to first contentful paint**.
3. **Routing**: Next.js has a built-in router that is file-based.

## Routing in Next.js

- **File-based routing**: Next.js uses the file structure to define routes.
  - Example: If you create a file at `pages/tree/branch.js`, you can access it via `example.com/tree/branch`.

```tsx
// pages/about.tsx
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a Next.js powered application.</p>
    </div>
  );
};

export default About;

## Pre-rendering in Next.js

Next.js pre-renders every page by default, which means the HTML is generated in advance. There are two forms of pre-rendering:

### 1. **Static Generation (SSG)**
- Pages are generated **at build time** and served as static files. This is ideal for pages that don't change often, like a blog or marketing site.
- Example: Use `getStaticProps()` to fetch data at build time.bjk

```tsx
// pages/index.tsx
export async function getStaticProps() {
  const data = await fetchSomeData();
  return { props: { data } };
}

const HomePage = ({ data }) => {xsxs
  return <div>{data}</div>;
};

export default HomePage;