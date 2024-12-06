# **Assignment 4: Authentication and Protected Routes**

## **Learning Objectives**
1. Implement a basic authentication flow.
2. Protect specific routes from unauthorized access.
3. Manage user sessions.

---

## **Step-by-Step Guide**

### **1. Creating a Login Page**
#### **Task: Build a Login Form**
- Add a file: `src/app/login/page.tsx`.
- Use the `fetch` API to submit credentials to an API route.

##### Code Hint:
```tsx
// src/app/login/page.tsx
'use client';

export default function LoginPage() {
  const handleLogin = async () => {
    const res = await fetch('/api/login', { method: 'POST' });
    if (res.ok) {
      alert('Login successful!');
    } else {
      alert('Login failed!');
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleLogin} className="bg-green-600 text-white p-2">
        Login
      </button>
    </div>
  );
}
```
- **Resource**: [Session Handling](https://next-auth.js.org/getting-started/introduction)

---

### **2. Protecting Routes**
#### **Task: Restrict Access to a Page**
- Use middleware to check user authentication.

##### Code Hint:
```tsx
// src/middleware.ts
export default function middleware(req: Request) {
  const isAuthenticated = /* Your logic here */;
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}
```
- **Resource**: [Protecting Routes in Next.js](https://nextjs.org/docs/advanced-features/middleware)

---

### **3. Adding Logout Functionality**
#### **Task: Clear User Session**
- Create an API route to handle logout.

##### Code Hint:
```tsx
// src/pages/api/logout.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Logged out successfully' });
}
```

---

## **Assignment Checklist**
- [ ] Create a login form.
- [ ] Protect a route using middleware.
- [ ] Implement logout functionality.
