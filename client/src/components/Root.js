import React from 'react';
import './Root.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Header from './Header/Header';

function Root() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default Root;
