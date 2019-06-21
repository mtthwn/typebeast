import React from 'react';
import './Root.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';

function Root() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default Root;
