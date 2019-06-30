import React from 'react';
import './Root.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './containers/Main';
import Header from './components/Header/Header';
import Game from './containers/Play';

function Root() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/shop" component={Game} />

      <Route path="/play" component={Game} />
    </Router>
  );
}

export default Root;
