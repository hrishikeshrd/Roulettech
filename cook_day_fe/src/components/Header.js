import React from 'react';
import './Header.css'; // Import the CSS for styling the header
import { Link,useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Determine the title based on the current route
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Our Speciality';
      case '/blog':
        return 'Shared Delights';
      case '/contact':
        return 'Contact Us';
      default:
        return 'CookBook Corner';
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo/kangacook_logo.svg" alt="Logo" />
      </div>
      <div className="site-name">
        {/* <h1 >{getTitle()}</h1> */}
                  <h2 style={{textAlign: 'center',
            fontSize: '2em',
            color: '#FF4D00',  
            fontFamily: "'Montserrat', sans-serif", 
            textTransform: 'uppercase',
            marginBottom: '20px',
            letterSpacing: '2px',
            
          }}>{getTitle()}</h2> 
        {/* <h1>CookBook Corner</h1> */}
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
