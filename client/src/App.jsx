import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;