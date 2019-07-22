import React, { useEffect, useReducer } from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Garage, Game, Main, Shop } from './containers';

import UserContext from './context/user-context';

function Root() {
  return (
    <UserContext.Provider>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/garage" component={Garage} />
        <Route path="/shop" component={Shop} />
        <Route path="/play" component={Game} />
      </Router>
    </UserContext.Provider>
  );
}

export default Root;
