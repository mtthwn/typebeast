import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  // sample axios call to the backend
  axios.get('http://localhost:8080/').then(res => {
    console.log(res.data);
  });

  return (
    <div className="App">
      <nav>
      //   <Link to="/about">About</Link>
      //   <br />
      //   <Link to="/">Home</Link>
      // </nav>
    </div>
  );
}

export default Home;
