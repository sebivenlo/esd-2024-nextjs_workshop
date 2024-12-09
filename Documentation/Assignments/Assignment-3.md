# **Assignment 3: Event Handling and Forms**

## **Learning Objectives**
- Learn how to handle events in React.
- Create a form to capture user input.
- Manage state in a functional component.

---

## **Step-by-Step Guide**

### **1. Create a Form Component**
- Create a new file: `src/components/EventForm.tsx`.
- Build a form with inputs for `title`, `date`, and `description`.

##### Example (incomplete):
```tsx
// src/components/EventForm.tsx
export default function EventForm() {
  return (
    <form className="p-4 border rounded">
      <label className="block mb-2">
        Title:
        <input type="text" className="block w-full border p-2" />
      </label>
      {/* Add inputs for date and description */}
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
```

💡 **Hints**:
- Use the `<input>` element for `date` and `text` fields.
- For `description`, use a `<textarea>` element to allow multiline input.

🔗 **Resources**:
- Learn React forms: [React Forms Documentation](https://react.dev/learn/adding-interactivity#forms)
- Tailwind input styling: [Tailwind CSS Docs](https://tailwindcss.com/docs/forms)

---

### **2. Add State Management**
- Use the `useState` hook to manage form values (e.g., `title`, `date`, `description`).
- Handle the `onSubmit` event to log form data.

##### Example (incomplete):
```tsx
import { useState } from 'react';

export default function EventForm() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add inputs with name attributes for title, date, and description */}
    </form>
  );
}
```

💡 **Hints**:
- Use `name` attributes in input elements to dynamically update state.
- Always call `e.preventDefault()` in `handleSubmit` to prevent page reload.

🔗 **Resources**:
- Learn `useState`: [React State Documentation](https://react.dev/learn/state-a-component-s-memory)
- Debugging forms: [React Forms Handling](https://react.dev/reference/react)

---

### **3. Display the Form**
- Create a new page: `src/app/add-event/page.tsx`.
- Import and render the `EventForm` component.

##### Example (incomplete):
```tsx
// src/app/add-event/page.tsx
import EventForm from '@/components/EventForm';

export default function AddEventPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add a New Event</h1>
      {/* Render the EventForm component here */}
    </div>
  );
}
```

💡 **Hint**: Use simple styling like `text-center` or `max-w-md` to improve the layout.

🔗 **Resource**: [Next.js App Directory Routing](https://nextjs.org/docs/app/building-your-application/routing)

---

### **4. Add Navigation to the Navbar**
- Update the `Navbar` component (`src/components/Navbar.tsx`) to include a link to the "Add Event" page.

##### Example (incomplete):
```tsx
<li>
  <Link href="/add-event">Add Event</Link>
</li>
```

💡 **Hint**: Ensure consistent styling for navigation links.

🔗 **Resource**: [Next.js Link Documentation](https://nextjs.org/docs/api-reference/next/link)

---

## **Hints and Resources**

### Common Challenges
- **Form Not Submitting?**
  - Double-check that `onSubmit` is attached to the `<form>` element.
  - Ensure `e.preventDefault()` is used in the `handleSubmit` function.

- **State Not Updating?**
  - Verify that `name` attributes in inputs match the keys in `formData`.

### Resources
1. [React Forms Documentation](https://react.dev/learn/adding-interactivity#forms)
2. [React State Management](https://react.dev/learn/state-a-component-s-memory)
3. [Tailwind CSS Utilities](https://tailwindcss.com/docs)

---

## **Checklist**
- [ ] Create an `EventForm` component with inputs for `title`, `date`, and `description`.
- [ ] Use `useState` to manage the form values.
- [ ] Log the form data on submit.
- [ ] Add a page to display the form (`/add-event`).
- [ ] Add a navigation link in the `Navbar` for the "Add Event" page.

---

[← Previous Assignment](Assignment-2.md) | [Main README](../../README.md) | [Next Assignment →](Assignment-4.md)