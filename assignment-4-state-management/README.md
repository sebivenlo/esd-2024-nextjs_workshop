### **Assignment: State Management with Context**  

#### **Goal**  
Use an `EventsProvider` to manage event data globally across the app.

---

#### **Assignment Requirements**  
1. **Implement Event Actions:**  
   - Complete the logic for `addEvent`, `updateEvent`, and `deleteEvent` in the `EventsProvider`.  
   - **Helpful Link**: [React Context API](https://reactjs.org/docs/context.html) for understanding how to use context to manage state.

2. **Use the Context:**  
   - Replace any stateful event handling logic in other components (such as `EventForm` and `CalendarGrid`) with the context, so the event data is shared globally.  
   - **Helpful Link**: [React Context `useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) for accessing context in functional components.

---

#### **Hints**  
- `addEvent` logic should append the new event to the existing array in state.  
- `updateEvent` should find and update the event by `id` in the array.  
- `deleteEvent` should remove the event by `id`.  
- Ensure the context is wrapped around your component tree, providing state to all components that need access to it.
- **Helpful Link**: [Managing State with Context](https://reactjs.org/docs/context.html#context-provider) for an overview of managing state with Context API in React.

---

#### **Expected Behavior**  
- All components should use the global state managed by the `EventsProvider`.  
- The `addEvent`, `updateEvent`, and `deleteEvent` actions should modify the state, and any changes should immediately reflect in the relevant components (e.g., `EventForm`, `CalendarGrid`, etc.).

---

#### **Additional Resources**  
- **React Context API Overview**: [React Context Documentation](https://reactjs.org/docs/context.html)  
- **How to Update State in Context**: [Managing State in React](https://reactjs.org/docs/state-and-lifecycle.html)

- **Handling Arrays and Objects in React State**: [React Docs on State](https://reactjs.org/docs/state-and-lifecycle.html) for best practices when updating complex state like arrays or objects.
