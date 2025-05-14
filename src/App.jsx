import React from 'react';
import { Routes, Route } from "react-router";
import Header from "./components/header";
import Landing from "./pages/Landing";
import Footer from './components/footer';
import About from "./pages/About";
import SingleBlog from "./pages/SingleBlog";

import './App.css';


function App() {


  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/SingleBlog" element={<SingleBlog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
