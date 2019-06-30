import React from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './containers/Main';
import Shop from './containers/Shop';
import Game from './containers/Play';

function Root() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/shop" component={Shop} />
      <Route path="/play" component={Game} />
    </Router>
  );
}

export default Root;
