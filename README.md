# **Next.js Workshop**

Welcome to the **Next.js Workshop**, designed to guide you through the basics of Next.js with hands-on learning and interactive assignments. By the end of this workshop, you'll have a solid foundation in Next.js and the skills to build dynamic web applications.

---

## **Table of Contents**

1. [Setup](#setup)
   - [Navigate to the Project Folder](#navigate-to-the-project-folder)
   - [Run the Docker Environment](#run-the-docker-environment)
2. [Workshop Assignments](#workshop-assignments)
   - [Assignment 1: Basic Routing and Components](Documentation/Assignments/Assignment-1.md)
   - [Assignment 2: Server-Side Rendering and Data Fetching](Documentation/Assignments/Assignment-2.md)
   - [Assignment 3: API Routes and Middleware](Documentation/Assignments/Assignment-3.md)
   - [Assignment 4: Authentication and Protected Routes](Documentation/Assignments/Assignment-4.md)
3. [Additional Information](#additional-information)
   - [Next.js Basics](Documentation/Information/NextJSBasics.md)
   - [Workshop FAQs](Documentation/Information/FAQs.md)
4. [Advanced Challenge](#advanced-challenge)
   - [Calendar Project](#calendar-project)
5. [Why Learn Next.js?](#why-learn-nextjs)
6. [Learning Resources](#learning-resources)

## **Setup**

### **Navigate to the Project Folder**

Open your terminal and move into the workshop directory:
```bash 
cd nextjs_assignment
```

### **Run the Docker Environment**

1. Build the Docker container:
   ```bash
   docker build -t workshop .
   ```
2. Start the container:
   ```bash
   docker run -p 3000:3000 workshop
   ```

The app will be accessible at `http://localhost:3000`.

---

## **Workshop Assignments**

### Assignment Overview
Each assignment is designed to teach a core concept of Next.js, with practical examples and step-by-step instructions.

1. **[Assignment 1: Basic Routing and Components](Documentation/Assignments/Assignment-1.md)**  
   **Learning Objectives:**
   - Learn how to create routes using the file system
   - Build basic pages with React components
   - Use `Link` for navigation
   - Style components with Tailwind CSS

2. **[Assignment 2: Server-Side Rendering and Data Fetching](Documentation/Assignments/Assignment-2.md)**  
   **Learning Objectives:**
   - Understand Server-Side Rendering (SSR) and Static Site Generation (SSG)
   - Learn how to fetch and display data using Next.js functions
   - Implement Incremental Static Regeneration (ISR) for dynamic updates

3. **[Assignment 3: API Routes and Middleware](Documentation/Assignments/Assignment-3.md)**  
   **Learning Objectives:**
   - Learn how to create custom API routes in Next.js
   - Implement middleware for request handling
   - Handle form submissions using API routes

4. **[Assignment 4: Authentication and Protected Routes](Documentation/Assignments/Assignment-4.md)**  
   **Learning Objectives:**
   - Implement a basic authentication flow
   - Protect specific routes from unauthorized access
   - Manage user sessions

### Completing Assignments
Navigate to the `Documentation/Assignments` folder for detailed instructions. Each assignment includes:
- Learning objectives
- Step-by-step guides
- Partial code snippets to help you complete tasks

---

## **Additional Information**

For a deeper understanding of Next.js, explore the **Information** folder:
- **[Next.js Basics](Documentation/Information/Next.js_intro.md)**: Comprehensive introduction to Next.js concepts, including routing, rendering strategies, and core features
- **[Pros and Cons of Next.js](Documentation/Information/Pros_and_Cons.md)**: Detailed analysis of Next.js advantages and challenges


## **Advanced Challenge**

### **Calendar Project**
After completing the workshop, challenge yourself with the **[Calendar Project](calendar_assignment/README.md)**. This is a more comprehensive project to apply your Next.js skills.

Details include:
- Thorough documentation for each step
- Assignments broken down into manageable tasks
- Practical use of advanced Next.js concepts

> **Note:** This project is not included in the Docker setup but can be worked on separately.

---

## **Why Learn Next.js?**

Next.js is a powerful React framework that simplifies web development by offering:
- **SEO Optimization:** Built-in tools for search engine rankings
- **Performance Boosts:** Static site generation and server-side rendering
- **Full-Stack Capabilities:** Create APIs and frontend in a single project

---

## **Learning Resources**

Here are some helpful links to enhance your learning experience:
- [Next.js Official Documentation](https://nextjs.org/docs)
- [React Basics](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JavaScript Tutorials (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

Happy coding and enjoy the workshop! 🚀