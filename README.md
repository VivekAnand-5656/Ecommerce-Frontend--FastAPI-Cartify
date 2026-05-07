🛍️ E-Commerce Frontend (React)

This is the frontend of the E-Commerce web application built using React.
It connects with the FastAPI backend and provides a complete shopping experience including authentication, product browsing, cart, wishlist and order management.

The goal of this project was to build a fully responsive and modern UI while practicing real-world frontend architecture and state management.

⚙️ Tech Stack
React JS – UI library
Tailwind CSS – Styling & responsive design
CSS – Custom styling
Context API – Global state management
Axios – API integration
React Router – Navigation & routing
✨ Features
🔐 Authentication
User Signup & Login
Protected routes
JWT token stored in localStorage
Logout functionality
🏠 Home Page
Product listing from API
New arrival products section
Responsive product cards
🔍 Search & Filters
Search products by keyword
Filter products by category
🛒 Cart System
Add to cart
Increase / decrease quantity
Remove items
Clear cart
Persistent cart using backend
❤️ Wishlist
Add/remove products to wishlist
Dedicated wishlist page
📦 Orders
Place order from cart
View previous orders
👤 User Profile
View logged-in user details
📁 Project Structure
frontend/
│
├── src/
│   ├── components/      Reusable UI components
│   ├── pages/           Application pages
│   ├── context/         Global state (Context API)
│   ├── services/        API calls
│   ├── assets/          Images & icons
│   └── App.jsx          Main app component
│
├── public/
├── package.json
└── tailwind.config.js
🔗 Backend API

This frontend consumes the FastAPI backend.
Make sure backend server is running before starting frontend.

Default backend URL used:

https://e-commerce-project-3365.onrender.com