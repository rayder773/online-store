const updateItemList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      loading: true,
      error: null,
    };
  }

  const deleteFromCatalog = (state, itemId) => {
    const { itemList: { items } } = state;

    return {
      items: [
      ...items.slice(0, itemId),
      ...items.slice(itemId + 1)
      ]
    };
  };

  const deleteAllItemsFromCatalog = () => {
    return {
      items: []
    };
  };

  const addItemToCatalog = (state, {payload}) => {
    const { itemList: { items } } = state;
    const newItem = {
      id: items.length,
      title: payload.title,
      price: +payload.price,
      coverImage: "https://ru.reactjs.org/logo-og.png"
    };

    return {
      items: [
        ...items,
        newItem
      ]
    };
  };

  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        items: [],
        loading: true,
        error: null
      };

    case 'FETCH_ITEMS_SUCCESS':
      return {
        items: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_ITEMS_FAILURE':
      return {
        items: [],
        loading: false,
        error: action.payload
      };

    case 'ITEM_REMOVED_FROM_CATALOG':
      return deleteFromCatalog(state, action.payload);
    
    case 'ALL_ITEMS_REMOVED_FROM_CATALOG':
      return deleteAllItemsFromCatalog(state);

    case 'ITEM_ADD_TO_CATALOG':
      return addItemToCatalog(state, action);

    default:
      return state.itemList;
  }
};

export default updateItemList;
