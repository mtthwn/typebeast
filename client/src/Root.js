import React from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Main from './containers/Main/Main';
// import Garage from './containers/Garage/Garage';
// import Game from './containers/Play/Play';
import Shop from './containers/Shop';

import { Garage, Game, Main } from './containers';

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
