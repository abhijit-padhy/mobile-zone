import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

/* 
* From v0.1.1 onwards default NODE_PATH has been set as src/
* So no need to write absolute path for imports from v0.1.1 onwards.
*/
import Products from 'components/products/Products';
import Blackjack from 'components/blackjack/Blackjack';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Mobile Zone</h1>
          <ul>
            <li>
              <Link className="App-link" to="/blackjack">Blackjack</Link>
            </li>
            <li>
              <Link className="App-link" to="/products">Products</Link>
            </li>
          </ul>
          <hr />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Blackjack />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/blackjack">
              <Blackjack />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
