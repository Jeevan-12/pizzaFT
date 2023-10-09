import React, { useState } from 'react';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './component/Contact';
import About from './component/About';
import Service from './component/Service';
import Blog from './component/Blog';
import Menu from './component/Menu';
import Cart from './component/Cart';
import OrderPlaced from './component/OrderPlaced';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderPlaced" element={<OrderPlaced />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
