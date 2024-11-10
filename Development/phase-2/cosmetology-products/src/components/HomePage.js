// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to Glow & Glam Cosmetic</h2>
      <p>Your one-stop shop for high-quality beauty essentials. Browse our selection to find the perfect products to enhance your beauty routine!</p>
      <p>Whether you're looking for the latest beauty tools or timeless skincare products, we have everything you need. Start by exploring our product catalog or adding a new product to our inventory.</p>
      
      
      <nav>
        <ul>
          <li>
            <Link to="/product">View Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;