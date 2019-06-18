import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  // sample axios call to the backend
  axios.get('http://localhost:8080/')
    .then(res => {
      console.log(res.data)
    });
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
