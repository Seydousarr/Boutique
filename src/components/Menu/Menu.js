import React from 'react';
import './Menu.css';
import logo from './Logo.jpg'; 

const Menu = () => {
  return (
    <nav className="menu">
     
      <div className="menu-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="menu-items">
        <li><a href="#Shop">Shop</a></li>
        <li><a href="#panier">Panier</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-search">
        <input type="text" placeholder="Rechercher..." />
      </div>
    </nav>
  );
};

export default Menu;
