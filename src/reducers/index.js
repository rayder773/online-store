import updateItemList from './item-list';

const reducer = (state, action) => {
  return {
    itemList: updateItemList(state, action),
    access: true                  // if true - admin ; false - user
  };
};

export default reducer;
