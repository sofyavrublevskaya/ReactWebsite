import React from 'react';
import { Routes, Route } from "react-router";
import Header from "./components/header";
import Landing from "./pages/Landing";
import Footer from './components/footer';
import './App.css';


function App() {
  

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/"  element={<Landing/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
