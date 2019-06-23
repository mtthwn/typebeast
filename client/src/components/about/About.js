import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <h1>Welcome to the about page!</h1>

      <Link to="/">Back</Link>
    </div>
  );
}

export default About;
