import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './Main';
import About from './About';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
