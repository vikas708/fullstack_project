import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Make sure to import BrowserRouter as Router
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

const App = () => {



  useEffect(() => {
    // Check if the user has visited the site before
    const visitedBefore = localStorage.getItem("visitedBefore");

    if (!visitedBefore) {
      // If not visited before, redirect to the register page
      window.location.href = "/register"; // Redirect to the register page
      localStorage.setItem("visitedBefore", "true"); // Set the flag to indicate the user has visited
    }
  }, []);
  const user = useSelector((state) => state.user.currentUser);
  const registrationSuccess  = useSelector((state) => state.registration.registrationSuccess);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={ user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={registrationSuccess  ? <Navigate to="/login" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
