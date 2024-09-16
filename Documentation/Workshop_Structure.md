# Next.js Workshop Structure

## Duration: 2 hours

### Workshop Breakdown

1. [Introduction to Next.js](#1-introduction-to-nextjs) (20 minutes)
   - Overview of Next.js: What is it, and why use it?
   - Key Features: SSR, SSG, API Routes, and more.
   - Presentation slides or a brief talk.

2. [Project Setup](#2-project-setup) (10 minutes)
   - Setting up a new Next.js project.
   - Folder structure and how Next.js differs from a basic React app.

3. [Pages and Routing](#3-pages-and-routing) (20 minutes)
   - Explanation of file-based routing in Next.js.
   - Practical Assignment 1: Creating pages and setting up dynamic routing.

4. [Data Fetching](#4-data-fetching) (20 minutes)
   - Static Generation (SSG) vs Server-Side Rendering (SSR).
   - Practical Assignment 2: Fetching data using `getStaticProps` and `getServerSideProps`.

5. [API Routes](#5-api-routes) (15 minutes)
   - Introduction to building backend routes within a Next.js app.
   - Practical Assignment 3: Creating a simple API route and calling it from a page.

6. [Styling in Next.js](#6-styling-in-nextjs) (15 minutes)
   - CSS Modules, Global CSS, and Styled JSX.
   - Practical Assignment 4: Add custom styles to components.

7. [Deploying a Next.js App](#7-deploying-a-nextjs-app) (10 minutes)
   - Brief overview of how to deploy a Next.js app (e.g., Vercel).

8. [Q&A](#8-qa) (10 minutes)
   - Time for questions and additional discussion.

---

## 1. Introduction to Next.js (20 minutes)

### Key Topics:
- **What is Next.js?**: A React framework for production-level applications.
- **Key Features**:
  - File-based routing.
  - Static Generation (SSG) and Server-Side Rendering (SSR).
  - API Routes.
  - Optimized performance (Automatic Image Optimization, Code Splitting, etc.).
- **Why Next.js?**: SEO, performance, and developer experience.

### Presentation:
- Use slides or whiteboard to explain concepts.
- Keep the explanation high-level but concise, emphasizing practical benefits.

---

## 2. Project Setup (10 minutes)

### Instructions:
1. Install the Next.js CLI (if not installed):
   ```bash
   npx create-next-app nextjs-workshop
   cd nextjs-workshop
   npm run dev
