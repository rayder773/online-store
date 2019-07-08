import React, { Component } from 'react';
import Item from '../item';

import { connect } from 'react-redux';

import { withItemsService } from '../hoc';
import { fetchItems, itemRemovedFromCatalog } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

const ItemList = ({ items, onDeletedFromCatalog, access }) => {
  items.map((item, i) => item.id = i)
  return (
    <div className="item-list">
      {
        items.map((item) => {
          return (
            <div key={item.id}>
              <Item
                item={item}
                onDeletedFromCatalog={() => onDeletedFromCatalog(item.id)}
                access={access}/>
            </div>
          );
        })
      }
    </div>
  );
};

class ItemListContainer extends Component {
  componentDidMount() {
    
    const {loading} = this.props;
    if(!loading) {
      return true;
    }   
    this.props.fetchItems();
  }

  render() {
    const { items, loading, error, onDeletedFromCatalog, access} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ItemList items={items} 
                     onDeletedFromCatalog={onDeletedFromCatalog}
                     access={access}/>;
  }
}

const mapStateToProps = ({ itemList: { items, loading, error }, access}) => {
  return { items, loading, error, access };
};

const mapDispatchToProps = (dispatch, { itemService }) => {

  return {
    fetchItems: fetchItems(itemService, dispatch),
    onDeletedFromCatalog: (id) => dispatch(itemRemovedFromCatalog(id))
  };
};

export default compose(
  withItemsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ItemListContainer);
