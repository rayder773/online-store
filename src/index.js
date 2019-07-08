import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ItemsService from './services/items-service';
import { ItemsServiceProvider } from './components/item-service-context';

import store from './store';

const itemService = new ItemsService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ItemsServiceProvider value={itemService}>
        <Router>
          <App />
        </Router>
      </ItemsServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);