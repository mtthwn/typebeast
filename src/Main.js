import React from 'react';
import axios from 'axios';

function Main() {
  // sample axios call to the backend
  axios.get('http://localhost:8080/').then(res => {
    console.log(res.data);
  });
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default Main;
