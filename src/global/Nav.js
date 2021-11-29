import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  const buttonStyle = {
    border: 'white solid 4px',
    padding: '10px 60px 10px 60px',
    borderRadius: '30px',
  };
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/works">
            <div style={buttonStyle}>과제</div>
          </Link>
        </li>
        <li>
          <NavLink to="/works">
            <div style={buttonStyle}>무제</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/works">
            <div style={buttonStyle}>무제</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/works">
            <div style={buttonStyle}>무제</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
