import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="https://cdn1.vectorstock.com/i/1000x1000/02/10/book-logo-or-open-store-on-black-background-vector-43400210.jpg" alt="Book Store Logo" />
          <h1>Online Book Store</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Books..." />
          <button className="btn btn-primary">Search</button>
        </div>

        <button className="cart-button">
          <i className="fas fa-shopping-cart"></i> 🛒 
        </button>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Book Categories</a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Register">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;





