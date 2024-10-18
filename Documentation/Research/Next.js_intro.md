# Beginner Next.js Workshop Cheat Sheet

## What is Next.js?

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) along with hybrid applications, offering optimized performance and SEO compared to traditional React apps that use client-side rendering (CSR)[^1].

### Traditional React App: Client-Side Rendering (CSR)
- **Client-Side Rendering (CSR)**: React apps render everything on the client side (browser).
- **Cons**:
  - Interactive React content may be invisible to social media bots and search engines[^2].
  - Slower time to first contentful paint (when the first bit of content is rendered on the screen)[^3].

### Next.js Approach
Next.js solves these issues by enabling **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Incremental Static Regeneration (ISR)**[^1].

- **Server-Side Rendering (SSR)**: Content is pre-rendered on the server. When a bot or user requests a page, they get fully rendered HTML.
  - This improves **SEO** because search engines and bots can see pre-rendered content[^4].
  - After the user receives the page, the client-side React code takes over, making the page interactive[^5].

### Advantages of Next.js over Traditional React (CSR)
1. **SEO**: Fully rendered content is visible to bots and search engines[^6].
2. **Performance**: SSR enables a faster **time to first contentful paint**[^3].
3. **Routing**: Next.js has a built-in router that is file-based[^7].

## Routing in Next.js

- **File-based routing**: Next.js uses the file structure to define routes[^7].
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
```

Visit `/about` at `example.com/about`.

## Pre-rendering in Next.js

Next.js pre-renders every page by default, which means the HTML is generated in advance. There are two forms of pre-rendering[^1]:

### 1. Static Generation (SSG)
- Pages are generated at build time and served as static files. This is ideal for pages that don't change often, like a blog or marketing site[^8].
- Example: Use `getStaticProps()` to fetch data at build time.

```tsx
// pages/index.tsx
export async function getStaticProps() {
  const data = await fetchSomeData();
  return { props: { data } };
}

const HomePage = ({ data }) => {
  return <div>{data}</div>;
};

export default HomePage;
```

### 2. Server-Side Rendering (SSR)
- Pages are generated at request time, meaning the server will generate fresh HTML every time a request is made[^4].
- Example: Use `getServerSideProps()` to fetch data on each request.

```tsx
// pages/profile.tsx
export async function getServerSideProps() {
  const userData = await fetchUserData();
  return { props: { userData } };
}

const ProfilePage = ({ userData }) => {
  return <div>{userData.name}</div>;
};

export default ProfilePage;
```

### 3. Incremental Static Regeneration (ISR)
- Pages can be updated after the site is built without rebuilding the entire site[^9].
- Example: Use `revalidate` to regenerate the page in the background.

```tsx
// pages/blog/[id].tsx
export async function getStaticProps({ params }) {
  const blogPost = await fetchBlogPost(params.id);
  return {
    props: { blogPost },
    revalidate: 10, // Revalidate this page every 10 seconds
  };
}
```

## API Routes in Next.js

You can create API endpoints using file-based routing. These are placed in the `pages/api/` folder and can handle requests, such as fetching data or sending responses[^10].

```tsx
// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, Next.js!' });
}
```

Visit `/api/hello` to see the API response.

## Conclusion

Next.js allows you to:

- Pre-render content for better SEO and performance[^6].
- Serve pages dynamically with server-side rendering or build static pages with static generation[^8].
- Use file-based routing for easier project organization[^7].
- Seamlessly handle client-side and server-side logic[^1].

For more advanced topics:

- Explore API routes[^10], CSS modules[^11], Image Optimization[^12], and Dynamic Routing[^13].

---

## References

[^1]: [Next.js Documentation – Basic Features](https://nextjs.org/docs/basic-features/pages)
[^2]: [Google Developers – JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
[^3]: [Web.dev – Time to First Contentful Paint](https://web.dev/first-contentful-paint/)
[^4]: [Next.js Documentation – Server-side Rendering (SSR)](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
[^5]: [React – Hydration](https://reactjs.org/docs/react-dom.html#hydrate)
[^6]: [Google – SEO Fundamentals](https://developers.google.com/search/docs/beginner/seo-starter-guide)
[^7]: [Next.js Documentation – File-based Routing](https://nextjs.org/docs/routing/introduction)
[^8]: [Next.js Documentation – Static Generation (SSG)](https://nextjs.org/docs/basic-features/pages#static-generation)
[^9]: [Next.js Documentation – Incremental Static Regeneration (ISR)](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
[^10]: [Next.js Documentation – API Routes](https://nextjs.org/docs/api-routes/introduction)
[^11]: [Next.js Documentation – CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#css-modules)
[^12]: [Next.js Documentation – Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
[^13]: [Next.js Documentation – Dynamic Routing](https://nextjs.org/docs/routing/dynamic-routes)