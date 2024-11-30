### **Assignment: Dynamic Routing for Event Details**  

#### **Goal**  
Create a detailed event page using dynamic routing with `[id]`. Participants will implement fetching and displaying event data using `useParams`.

---

#### **Assignment Requirements**  
1. **Fetch Event Data by ID:**  
   - Use `useParams()` to retrieve the `id` from the URL.  
   - Fetch the event data from `localStorage` using the `id`.  
   - **Helpful Link**: [React Router `useParams`](https://reactrouter.com/en/main/hooks/use-params) for retrieving dynamic URL parameters.

2. **Display the Event:**  
   - Replace the `event` placeholder with the actual data.  
   - Dynamically render the event’s `title`, `date`, and `description`.  

3. **Handle Missing Data:**  
   - If no event is found with the given `id`, display a "Not Found" message.  
   - **Helpful Link**: [MDN JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) for parsing the `localStorage` data.

---

#### **Hints**  
- To fetch events from `localStorage`:
  ```tsx
  const events = JSON.parse(localStorage.getItem('events') || '[]');
  const event = events.find((e: { id: string }) => e.id === id);
  ```  
- Update the `event` state using `useEffect` if needed for dynamic data loading.  
- **Helpful Link**: [React `useEffect`](https://reactjs.org/docs/hooks-effect.html) for handling side effects and data fetching.

---

#### **Expected Behavior**  
- Navigating to `/events/[id]` (e.g., `/events/123`) shows the details of the matching event.  
- If no matching event is found, the page displays an appropriate "Not Found" message.

---

#### **Additional Resources**  
- **React Router Basics**: Learn how to handle dynamic routes in React with React Router.  
  [React Router](https://reactrouter.com/en/main)

- **Fetching Data in React**: For an overview on fetching data in React components, check out this guide.  
  [Fetching Data with React](https://reactjs.org/docs/faq-ajax.html)

- **JavaScript Object Methods** (e.g., `find()` method to search arrays):  
  [MDN Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
