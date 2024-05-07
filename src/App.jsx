import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Contacts from "./components/Contacts";
import Wishlist from "./components/Wishlist";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
