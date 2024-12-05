# Next.js Workshop

Welcome to the **Next.js Workshop** repository! This repo contains all the materials and code examples for our Next.js workshop.

## Workshop Overview

In this workshop, we will cover the following topics:
- Introduction to Next.js
- Pages and Routing
- Static and Server-Side Rendering
- API Routes
- Deploying a Next.js Application

## Workshop Assignments

This workshop is divided into several assignments that gradually build upon each other. Below is a brief description of each assignment along with a link to the corresponding README file where you can find instructions and details:

1. **[Assignment 1: Dynamic Event Grid](./assignment-1-dynamic-event-grid/README.md)**
   - Goal: Render the calendar grid with dynamic data.
   - Gap: Omit the logic to loop through days and display events. Participants will implement the loop.

2. **[Assignment 2: Adding Events](./assignment-2-adding-events/README.md)**
   - Goal: Implement the EventForm to add events to the state and localStorage.
   - Gap: Provide the form structure but omit the logic for adding events. Participants will implement the event addition.

3. **[Assignment 3: Dynamic Routing for Event Details](./assignment-3-dynamic-routing/README.md)**
   - Goal: Create a detailed event page with dynamic routing using `[id]`.
   - Gap: Provide the routing setup but leave out the logic to fetch event data by ID. Participants will implement `useParams` and display the event.

4. **[Assignment 4: State Management with Context](./assignment-4-state-management/README.md)**
   - Goal: Use `EventsProvider` to manage event data globally.
   - Gap: Provide the context setup but omit the logic for `addEvent`, `updateEvent`, and `deleteEvent`. Participants will fill in the logic.

5. **[Assignment 5: Edit and Delete Events](./assignment-5-edit-delete-events/README.md)**
   - Goal: Enable editing and deleting events from the detail page.
   - Gap: Provide the structure for `handleEdit`, `handleUpdate`, and `handleDelete`. Participants will complete the functionality.

## How to Get Started

To get started with the workshop, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/nextjs-workshop.git
cd nextjs-workshop
```

Install the dependencies:

```bash
npm install
```

To start the development server:

```bash
npm run dev
```

You can then open the application in your browser at `http://localhost:3000`.

## How to Use the Assignments

1. **Each assignment is located in its own folder** under the root directory. For example, if you're working on Assignment 1, you will navigate to the `assignment-1-dynamic-event-grid` folder.
2. Inside each folder, you'll find a `README.md` file that contains the specific instructions for that assignment.
3. **Work through the assignments sequentially**, as each builds upon the previous one. When you've completed an assignment, move on to the next one.

## Tips for Success

- Follow the instructions in each assignment's README carefully.
- Make sure to test your changes after completing each assignment.
- If you get stuck, try to break the problem into smaller parts and tackle them one by one.

Happy coding!

---

# ESD template

Please make sure all artifacts are in this GitHub repository.  
That includes:

- Code
- Workshop materials
- Presentation (if applicable)
- References.
- Docker (compose) file (if applicable)
