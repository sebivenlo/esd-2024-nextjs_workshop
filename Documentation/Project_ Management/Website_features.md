# Features to Display in the Website

## File-Based Routing:
- Automatically generated routes from the file system.
- **Example:** Pages like `/about`, `/contact`, etc., simply created by adding files in the `pages/` directory.

## Dynamic Routes:
- Creating dynamic URLs using bracket notation, e.g., `pages/posts/[id].tsx`.
- **Showcase:** Blog post or product detail page.

## Static Generation (`getStaticProps` and `getStaticPaths`):
- Pre-rendering pages at build time with fetched data.
- **Example:** Fetch blog posts or products and generate static pages for each.

## Server-Side Rendering (`getServerSideProps`):
- Fetch data on every request.
- **Example:** A `/profile` page that fetches user-specific data.

## Client-Side Data Fetching:
- Use `useEffect` and `fetch` to dynamically fetch data after the page loads.
- **Example:** A "Load More" button that fetches additional data.

## API Routes:
- Create backend endpoints directly in the Next.js app.
- **Example:** A `/api/hello` route that returns a JSON response.

## Reusable Components:
- Demonstrate how to build and reuse components across different pages.
- **Example:** A `Header` or `Footer` component that is present on every page.

## CSS Modules:
- Show how to use scoped styles with CSS modules.
- **Example:** Styling individual components with module-specific CSS.

## Image Optimization:
- Use the Next.js `Image` component to optimize images for faster loading.
- **Example:** Display optimized images with automatic resizing and lazy loading.

## Static File Serving:
- Demonstrate how to serve static assets like images, fonts, or files from the `/public` directory.

# Website Structure:

## Homepage:
- Overview of the features covered.
- Navigation to the other pages that demonstrate each feature.

## Pages for Each Feature:
- `/routing` – Example of file-based and dynamic routing.
- `/static-generation` – Demonstrates `getStaticProps` and `getStaticPaths`.
- `/server-side-rendering` – A page that fetches data on every request.
- `/data-fetching` – Example of client-side data fetching.
- `/api` – Show how API routes work.
- `/components` – Display reusable components.
- `/styling` – Example of styled components using CSS Modules.
- `/image-optimization` – Showcase optimized images.
- `/static-files` – Serve static files from the `/public` folder.
