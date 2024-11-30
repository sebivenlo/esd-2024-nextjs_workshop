### Assignment: Adding Events

#### **Goal**  
Implement the `EventForm` to add events to the application state and save them in `localStorage`.

#### **Instructions**  
1. Open the `EventForm.tsx` file.  
2. Complete the `handleSaveEvent` function to save a new event to the application state.  
3. Ensure events persist by saving them in `localStorage`.

---

#### **Assignment Requirements**  
1. **Implement `handleSaveEvent`:**  
   - Create an event object with a unique `id` (use `Date.now().toString()` or a similar method).  
   - Pass the new event to the `onSave` callback.  
   - Reset the form fields (`title`, `date`, and `description`) after saving.  
   - **Helpful Link**: [MDN JavaScript Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) for generating a unique event `id`.

2. **Persist events in `localStorage`:**  
   - Modify the parent component (not included here) to handle saving events to the state and `localStorage`.  
   - Ensure the `onSave` callback updates both the local state and `localStorage`.  
   - **Helpful Link**: [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for working with `localStorage`.

---

#### **Hints**  
- Use `localStorage.getItem()` and `localStorage.setItem()` to manage persistence.  
- Example for generating a new event:  
  ```tsx
  const newEvent = { 
    id: Date.now().toString(), 
    title, 
    date, 
    description 
  };
  ```  
- Call `onSave(newEvent)` to update the parent state.  
- **Helpful Link**: [React State Management](https://reactjs.org/docs/state-and-lifecycle.html) for understanding how to manage state in React components.

---

#### **Expected Behavior**  
- Filling in the form and clicking "Save Event" adds the event to the application state and stores it in `localStorage`.  
- The form clears after an event is saved.

---

#### **Additional Resources**  
- **Handling Forms in React** (understanding controlled components, which is important for this assignment):  
  [React Forms](https://reactjs.org/docs/forms.html)

- **JavaScript LocalStorage Basics** (learn how to interact with the browser's `localStorage`):  
  [MDN Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- **Managing State in React** (a deeper dive into React state and how to handle it in functional components):  
  [React State Management](https://reactjs.org/docs/state-and-lifecycle.html)