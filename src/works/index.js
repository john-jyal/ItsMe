import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Work0826 from './0826';
import Work0830 from "./0830";

const Works = () => {
  const workStyle = {
    display: 'grid',
    gridTemplateColumns: '20% 1fr',
  };
  const dateStyle = {
    backgroundColor: '#7F7FD5',
    minHeight: '50vh',
  };
  return (
    <div style={workStyle}>
      <div className="dates" style={dateStyle}>
        <ul>
          <li>
            <Link to="/works/0826">0826</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/works/0830">0830</Link>
          </li>
        </ul>
      </div>
      <Route path="/works/0826" component={Work0826} />
      <Route path="/works/0830" component={Work0830} />
    </div>
  );
};

export default Works;
