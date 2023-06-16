import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> My Cart</h1>
      <Cart />
    </div>
  );
}

export default App;
