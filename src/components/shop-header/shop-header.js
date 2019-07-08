import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Online Store</div>
      </Link>
      <div className="btn-group">
        <button type="button" className="btn btn-info dropdown-toggle header-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
        </button>
          <div className="dropdown-menu">
            <Link to="/" className="dropdown-item"> 
              Catalog
            </Link>
            <Link to="/new-item" className="dropdown-item"> 
              Add new item
            </Link>
          </div>
      </div>    
    </header>
  );
};

export default ShopHeader;
