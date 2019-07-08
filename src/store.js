import { createStore } from 'redux';

import reducer from './reducers';

const loadState = () => {
    
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) {
          return undefined;
      }
      return JSON.parse(serializedState);
}

const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}

const persistedState = loadState();
  
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    saveState(store.getState())
})

export default store;
