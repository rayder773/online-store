import React from 'react';
import './item.css';

const Item = ({ item, onDeletedFromCatalog, access }) => {
  const { title, price, coverImage } = item;
  const btn = access ? (
    <button
      onClick={onDeletedFromCatalog}
      className="btn btn-danger add-to-cart">
      Delete from Catalog
   </button>
  ) : null;
  return (
    <div className="item">
      <div className="item-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="item-details">
        <span className="item-title font-weight-bold">{title}</span>
        <div className="item-price">${price}</div>
        {btn}
      </div>
    </div>
  );
};

export default Item;
