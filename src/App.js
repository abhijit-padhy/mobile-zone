import React from 'react';
import logo from './logo.svg';
import './App.css';

import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aeigon</h1>
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
