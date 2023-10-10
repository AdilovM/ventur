import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import List from './pages/list/List';
import BrowsePage from './pages/browse/BrowsePage';
import ShowMap from './components/maps/ShowMap';
// import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postings" element={<List />} />
        <Route path="/showmap" element={<ShowMap />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
