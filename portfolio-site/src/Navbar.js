import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create this file for styling

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">My Logo</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
