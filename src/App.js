import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";
import Home from "./components/Home/Home";
import Recipes from "./components/Home/Recipes";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import FoodDetailsScreen from "./screen/FoodDetailsScreen";
import ProfileScreen from "./screen/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer limit={1} position="top-right" />
      <div className="min-height d-flex flex-column">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe" element={<Recipes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/foodDetails/:id" element={<FoodDetailsScreen />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
