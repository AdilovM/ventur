import React from 'react';
import './navbar.css'
import '../header/header.css'
import Search from '../search/Search';
const Navbar = () => {

  return (
    <>
    <div className="navbar">
      <div className="navContainer">
        <a href="/" className="logo">VENTUR</a>
        <nav className="navItems" aria-label="Main navigation">
          <a href="#offroad" className="navLink">Offroad</a>
          <a href="#road" className="navLink">Road</a>
          <a href="#water" className="navLink">Water</a>
          <a href="#air" className="navLink">Air</a>
          <button className="headerBtn">Become a host</button>
        </nav>
      </div>
    </div>
      <Search/>
    </>
  );
};

export default Navbar;
