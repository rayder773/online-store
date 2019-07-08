import React from 'react';

import { connect } from 'react-redux';

import { allItemRemovedFromCatalog } from '../../actions';

import './information.css';

const Information = ({ items, onDeletedAllItemsFromCatalog }) => {

  let totalPrice = 0;
  
  items.forEach((item) => {
    totalPrice += item.price
  });

  let averagePrice = Math.ceil((totalPrice / items.length * 100) / 100);
  if(!averagePrice) averagePrice = 0;

  return (
    <div className="shopping-cart-table">
      <h2>Information</h2>
      <table className="table">
        <thead>
          <tr>
            <th >Quantity: <span className="digit">{items.length}</span></th>
            <th >Total price: <span className="digit">{totalPrice}</span></th>
            <th >Average price: <span className="digit">{averagePrice}</span></th>
            <th><button className="btn btn-danger"
                        onClick={onDeletedAllItemsFromCatalog}>Delete all items</button></th>
          </tr>
        </thead>     
      </table>
    </div>
  );
};

const mapStateToProps = ( { itemList: { items } } ) => {
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    onDeletedAllItemsFromCatalog: () => dispatch(allItemRemovedFromCatalog())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);

