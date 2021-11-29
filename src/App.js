import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Nav from './global/Nav';
import Works from './works';
import './App.css';

const headerClick = () => {};
const App = () => {
  return (
    <Router basename="/">
      <Link to="/">
        <header className="header" onClick={headerClick}>
          <h1>형석's 임시 사이트</h1>
        </header>
      </Link>
      <div className="nav-area">
        <Nav />
      </div>
      <Switch>
        <Route path="/works" component={Works} />
      </Switch>
    </Router>
  );
};

export default App;
