import React from 'react';
import './Header.css'; // Import the CSS for styling the header
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo/kangacook_logo.svg" alt="Logo" />
      </div>
      <div className="site-name">
        <h1>CookBook Corner</h1>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <Link to="/blog">Blog</Link>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
