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
import ListMaking from 'components/listMaking/ListMaking';
import BillDesk from 'components/billDesk/BillDesk';

function App() {
  const routes = [
    {
      name: "Blackjack",
      path: "/blackjack",
      show: true
    },
    {
      name: "Products",
      path: "/products",
      show: true
    },
    {
      name: "List Making",
      path: "/listMaking",
      show: true
    },
    {
      name: "Bill Desk",
      path: "/billdesk",
      show: true
    },
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1>
            <img src="/mobile-zone/logos/logo.png" height="48px" width="48px" alt="" />
            <span>&nbsp;Mobile Zone</span>
          </h1>
          <ul>
            {
              routes.map((el, id) => el.show && (
                <li key={id}>
                  <Link className="App-link" to={el.path}>{el.name}</Link>
                </li>
              ))
            }
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
            <Route path="/listMaking">
              <ListMaking />
            </Route>
            <Route path="/billdesk">
              <BillDesk />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
