import React from 'react';
import { Link, Route } from 'react-router-dom';
import Work0826 from './0826';
import Work0830 from './0830';
import Work1129 from './1129';
import Work1201 from './1201';

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
          <li>
            <Link to="/works/0830">0830</Link>
          </li>
          <li>
            <Link to="/works/1129">1129</Link>
          </li>
          <li>
            <Link to="/works/1201">1201</Link>
          </li>
        </ul>
      </div>
      <Route path="/works/0826" component={Work0826} />
      <Route path="/works/0830" component={Work0830} />
      <Route path="/works/1129" component={Work1129} />
      <Route path="/works/1201" component={Work1201} />
    </div>
  );
};

export default Works;
