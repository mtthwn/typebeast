import React from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './containers/Main';
import Garage from './containers/Garage';
import Game from './containers/Play';

function Root() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/garage" component={Garage} />
      <Route path="/play" component={Game} />
    </Router>
  );
}

export default Root;
