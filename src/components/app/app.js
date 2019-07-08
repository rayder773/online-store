import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, NewItem } from '../pages';

import './app.css';
import Information from '../Information/information';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/new-item"
          component={NewItem}
          />
      </Switch>
      <Information/>
    </main>
  );
};

export default App;
