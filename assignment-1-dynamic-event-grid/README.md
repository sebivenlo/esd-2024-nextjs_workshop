### Assignment: Dynamic Event Grid

#### **Goal**
Render a calendar grid that dynamically displays events for the selected month.

#### **Instructions**
1. Open the `CalendarGrid.tsx` file.
2. Implement the logic to generate a grid of days for the current month.
3. Display events on the respective days in the grid.

---

#### **Assignment Requirements**
1. **Generate the days for the current month**:
   - Use `startOfMonth(currentDate)` and `endOfMonth(currentDate)` to calculate the date range.
   - Loop through these days using a for loop or similar logic.
   - **Helpful Link**: [Date-fns documentation](https://date-fns.org/docs/Getting-Started) for `startOfMonth` and `endOfMonth` usage.

2. **Display each day in the grid**:
   - For each day, show the day number (use `format(day, 'd')`).
   - **Helpful Link**: [Date-fns format](https://date-fns.org/docs/Format) for formatting the date.

3. **Filter and display events for the corresponding day**:
   - Use `events.filter()` to match events with the current day (`format(event.date)`).
   - **Helpful Link**: [MDN Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) for filtering arrays.

4. **Test your solution**:
   - Ensure that each day is rendered, and events appear on their respective days.

---

#### **Hints**
- Use `addDays` from the `date-fns` library to iterate through each day in the month.
- Match the event's date with the day's date using `format(day, 'yyyy-MM-dd')`.
- You can structure the filtered events to look like this:
  ```tsx
  const dayEvents = events.filter(event => event.date === format(day, 'yyyy-MM-dd'));
  ```
- If you're unsure how to structure the grid, check out this tutorial on [Rendering a Calendar in React](https://www.digitalocean.com/community/tutorials/react-building-a-calendar-with-react) for inspiration.

---

#### **Expected Output**
- A grid of days for the current month.
- Each day displays its number.
- Events appear under the corresponding days.

---

#### **Additional Resources**
- **Dynamic Routing in Next.js** (to help understand dynamic pages, as this is foundational for how events will be viewed later):  
  [Dynamic Routes in Next.js](https://nextjs.org/docs/routing/dynamic-routes)

- **React Docs on Mapping over Arrays** (you'll need this to loop through days and events):  
  [Rendering Lists in React](https://reactjs.org/docs/rendering-lists.html)

- **Date Handling with date-fns** (for all date-related functions and examples in this assignment):  
  [date-fns documentation](https://date-fns.org/)
