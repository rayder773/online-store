const itemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  }
};

export const itemsLoaded = (newItems) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newItems
  };
};

const itemsError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  };
};

export const itemRemovedFromCatalog = (itemId) => {
  return {
    type: 'ITEM_REMOVED_FROM_CATALOG',
    payload: itemId
  };
}

export const allItemRemovedFromCatalog = () => {
  return {
    type: 'ALL_ITEMS_REMOVED_FROM_CATALOG',
  };
};

export const addItemToCatalog = (payload) => {
  return {
    type: 'ITEM_ADD_TO_CATALOG',
    payload
  };
};

const fetchItems = (itemService, dispatch) => () => {
  console.log('hi')
  dispatch(itemsRequested());
  itemService.getItems()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};

export {
  fetchItems
};
