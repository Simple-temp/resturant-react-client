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
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import AddNewFood from "./screen/AddNewFood";
import AdminListScreen from "./screen/AdminListScreen";
import CartScreen from "./screen/CartScreen";
import FoodDetailsScreen from "./screen/FoodDetailsScreen";
import FoodEditScreen from "./screen/FoodEditScreen";
import FoodScreen from "./screen/FoodScreen";
import OrderedDetailsScreen from "./screen/OrderedDetailsScreen";
import OrderedScreen from "./screen/OrderedScreen";
import OrdersScreen from "./screen/OrdersScreen";
import PaymentMethodScreen from "./screen/PaymentMethodScreen";
import PlaceOrderScreen from "./screen/PlaceOrderScreen";
import ProfileScreen from "./screen/ProfileScreen";
import ShippingAddressScreen from "./screen/ShippingAddressScreen";
import UsersScreen from "./screen/UsersScreen";

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
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/payment" element={<PrivateRoute>
              <PaymentMethodScreen />
            </PrivateRoute>} />
            <Route path="/shipping" element={<PrivateRoute>
              <ShippingAddressScreen />
            </PrivateRoute>} />
            <Route path="/placeorder" element={<PrivateRoute>
              <PlaceOrderScreen />
            </PrivateRoute>} />
            <Route path="/order/:id" element={<PrivateRoute>
              <OrderedDetailsScreen />
            </PrivateRoute>} />
            <Route path="/myorder" element={<PrivateRoute>
              <OrderedScreen />
            </PrivateRoute>} />

            {/* ADMIN ROUTES */}

            <Route path="/admin/allorder" element={<PrivateRoute>
              <OrdersScreen />
            </PrivateRoute>} />
            <Route path="/admin/user" element={<PrivateRoute>
              <UsersScreen />
            </PrivateRoute>} />
            <Route path="/admin/food" element={<PrivateRoute>
              <FoodScreen />
            </PrivateRoute>} />
            <Route path="/foodedit/:id" element={<PrivateRoute>
              <FoodEditScreen />
            </PrivateRoute>} />
            <Route path="/admin/adminlist" element={<PrivateRoute>
              <AdminListScreen />
            </PrivateRoute>} />
            <Route path="/admin/addnew" element={<PrivateRoute>
              <AddNewFood />
            </PrivateRoute>} />
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
