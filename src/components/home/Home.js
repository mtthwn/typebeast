import React from 'react';
import axios from 'axios';

function Home() {
  // sample axios call to the backend
  axios.get('http://localhost:8080/').then(res => {
    console.log(res.data);
  });

  return (
    <div className="App">
      <header className="App-header" />
    </div>
  );
}

export default Home;
