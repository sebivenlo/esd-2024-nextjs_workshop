# Next.js Workshop Assignments

## Assignment 1: File-Based Routing

**Objective:** Create basic pages using Next.js' file-based routing.

1. Create two new pages: `/about` and `/contact`.
2. On the `/about` page, write a short introduction about yourself.
3. On the `/contact` page, include a simple contact form (inputs for name, email, and message).
4. Make sure these routes are automatically accessible when navigating to `/about` and `/contact`.

---

## Assignment 2: Dynamic Routes

**Objective:** Learn to create dynamic routes in Next.js.

1. Create a new directory `pages/posts`.
2. Inside `pages/posts`, create a dynamic route file: `[id].tsx`.
3. Use this dynamic route to display a blog post. The page should show the post title and content.
4. Simulate fetching the post using a `getStaticProps` function to pass the data (for now, use static mock data for a few post IDs).

---

## Assignment 3: Static Generation (`getStaticProps` and `getStaticPaths`)

**Objective:** Practice static generation with dynamic content.

1. Use the dynamic `[id].tsx` page from Assignment 2.
2. Create a mock list of blog posts, each with an `id`, `title`, and `content`.
3. Use `getStaticProps` and `getStaticPaths` to pre-generate pages for these posts at build time.
4. Ensure that all the post pages are statically generated and accessible via their dynamic routes.

---

## Assignment 4: Server-Side Rendering (`getServerSideProps`)

**Objective:** Fetch data on the server for each request.

1. Create a new page called `/profile.tsx`.
2. Use `getServerSideProps` to fetch user-specific data (simulate with static data).
3. Display the user’s name, email, and a short bio.
4. This page should be rendered server-side on every request.

---

## Assignment 5: Client-Side Data Fetching

**Objective:** Use client-side data fetching in Next.js.

1. Create a new page `/comments.tsx`.
2. Use `useEffect` and `fetch` to fetch data from a public API (e.g., [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) to display a list of comments.
3. Add a "Load More" button that fetches more comments when clicked and appends them to the list.
4. Ensure the data is only fetched after the page has loaded (client-side).

---

## Assignment 6: API Routes

**Objective:** Create an API route in Next.js.

1. Inside the `pages/api` folder, create a new file `hello.ts`.
2. In this file, create a simple API endpoint that returns a JSON response: `{ message: 'Hello, World!' }`.
3. Create a new page `/api-demo.tsx` that makes a request to this API endpoint and displays the message on the page.
4. Ensure the page fetches the message from the API when the page loads.

---

## Assignment 7: Reusable Components

**Objective:** Create and reuse components in Next.js.

1. Create a `Header` and `Footer` component in the `/components` folder.
2. Use the `Header` component to display a navigation bar with links to the Home, About, and Contact pages.
3. Use the `Footer` component to display a copyright message.
4. Include the `Header` and `Footer` components in all the existing pages.

---

## Assignment 8: CSS Modules

**Objective:** Apply scoped styles using CSS Modules.

1. Create a new page `/styled-page.tsx`.
2. Inside the `/styles` folder, create a new file `StyledPage.module.css`.
3. Style the page using CSS Modules, applying unique styles to headings, paragraphs, and links.
4. Ensure the styles are scoped only to this page and do not affect the rest of the application.

---

## Assignment 9: Image Optimization

**Objective:** Learn how to use Next.js' `Image` component to optimize images.

1. Create a new page `/image-gallery.tsx`.
2. Use the `Image` component to display a gallery of images (you can use images from the `/public` folder or external URLs).
3. Ensure the images are responsive and optimized (Next.js should automatically handle lazy loading and resizing).
4. Explore different properties like `layout`, `width`, and `height` to control image display.

---

## Assignment 10: Static File Serving

**Objective:** Serve static assets like images and fonts from the `/public` directory.

1. Add a few images (e.g., logos, backgrounds) to the `/public` directory.
2. Create a new page `/static-assets.tsx`.
3. Display these images on the page using the `/public` directory path.
4. Optionally, include a custom font by placing it in the `/public` directory and linking it in your layout or page.

---

# Final Project Assignment

**Objective:** Combine all the features into a small project.

1. Create a simple blog that includes:
   - A homepage listing posts.
   - Dynamic routes for individual posts.
   - Static generation for blog posts with `getStaticProps`.
   - Server-side rendering for a user profile.
   - API routes to fetch and display data.
   - Reusable `Header` and `Footer` components.
   - Styling with CSS Modules.
   - Optimized images.
   - Static assets (images, fonts) served from the `/public` directory.

2. Ensure your app is fully functional and incorporates all the Next.js features learned during the workshop.

---
