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

##### Example (not complete):
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

---

### **2. Add State Management**
- Use `useState` to manage form values.
- Handle the `onSubmit` event to log form data.

##### Hint:
Use a `console.log` for now to ensure the form submits correctly.

---

### **3. Display the Form**
- Add the `EventForm` component to a new page: `src/app/add-event/page.tsx`.

---

### **4. Add Navigation to the Navbar**
- Update the `Navbar` to include a link to the "Add Event" page.

---

## **Hints and Resources**
### Common Challenges
- **Form Not Submitting?**: Ensure you handle `onSubmit` and call `event.preventDefault()`.

### Resources
- [React Forms Documentation](https://reactjs.org/docs/forms.html)
- [Next.js Routing Documentation](https://nextjs.org/docs/app/building-your-application/routing)

---

## **Checklist**
- [ ] Create an `EventForm` component with inputs for `title`, `date`, and `description`.
- [ ] Manage state for the form values.
- [ ] Add a "Add Event" page with the form.
- [ ] Add navigation to the `Navbar`.

---

[← Previous Assignment](Assignment-2.md) | [Main README](../../README.md) | [Next Assignment →](Assignment-4.md)
