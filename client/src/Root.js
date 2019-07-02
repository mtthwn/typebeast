import React from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Garage, Game, Main , Shop } from './containers';

function Root() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/garage" component={Garage} />
      <Route path="/shop" component={Shop} />
      <Route path="/play" component={Game} />
    </Router>
  );
}

export default Root;
