import React from 'react';
import { connect } from 'react-redux';
import './new-item-page.css' ;
import {addItemToCatalog} from '../../actions';

const NewItem = ({ addItem, access }) => {
  const payload = {
    title: '',
    price: ''
  };

  const handleName = (event) => {
    payload.title = event.target.value;
  }

  const handlePrice = (event) => {
    payload.price = event.target.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  if(access) {
    return (
      <div className="new-item-page">
        <h2>Add new Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" onChange={handleName} />  
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="text" className="form-control" onChange={handlePrice} />
          </div>
          
          <button type="submit" 
                  className="btn btn-primary"
                  onClick={() => addItem(payload)}>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <p>No access</p>
    )
  }
};

const mapStateToProps = ( { itemList: { items }, access } ) => {
  return {
    items,
    access
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    addItem: (payload) => dispatch(addItemToCatalog(payload))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
