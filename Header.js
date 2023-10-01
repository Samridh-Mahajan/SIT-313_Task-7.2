import React from 'react';
import './Header.css'; // Import your custom styles for the header

function Header() {
  return (
    <header className="custom-header"> {/* Use a custom class name */}
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <button className="custom-button">Sign In</button> {/* Apply a custom class to the button */}
    </header>
  );
}

export default Header;
