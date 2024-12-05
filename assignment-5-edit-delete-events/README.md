### **Assignment: Edit and Delete Events**

#### **Goal**  
Enable editing and deleting events directly from the event detail page.

---

#### **Assignment Requirements**  
1. **Implement `handleEdit`:**  
   - Populate the edit form fields with the selected event's details from the context.  
   - **Helpful Link**: [React Forms](https://reactjs.org/docs/forms.html) for managing form data in React.

2. **Implement `handleUpdate`:**  
   - Use the `updateEvent` function from the `EventsProvider` context to update the event details.  
   - **Helpful Link**: [React Context API](https://reactjs.org/docs/context.html) for understanding how to update state in the context.

3. **Implement `handleDelete`:**  
   - Use the `deleteEvent` function from the `EventsProvider` context to remove the event and redirect the user back to the home page.  
   - **Helpful Link**: [React Router](https://reactrouter.com/) for handling navigation after event deletion (e.g., redirecting to the home page).

---

#### **Hints**  
- The `handleEdit` function should update the `editEvent` state, which should be passed to the `updateEvent` function when the form is saved.  
- To delete the event, call `deleteEvent` with the event's `id` and use `useHistory` or `useNavigate` (from React Router) to redirect the user back to the home page.  
- **Helpful Link**: [useNavigate from React Router](https://reactrouter.com/docs/en/v6/hooks/use-navigate) to navigate after deleting an event.

---

#### **Expected Behavior**  
- The event detail page should allow users to edit event details, save changes, and delete events.  
- After deleting an event, the user should be redirected back to the home page.

---

#### **Additional Resources**  
- **Handling Forms in React**: [React Forms Documentation](https://reactjs.org/docs/forms.html)  
- **State Management in React**: [React Context API](https://reactjs.org/docs/context.html)  
- **React Router Documentation**: [React Router v6 Docs](https://reactrouter.com/)  
- **React Hooks for Navigation**: [useNavigate Hook](https://reactrouter.com/docs/en/v6/hooks/use-navigate)  
