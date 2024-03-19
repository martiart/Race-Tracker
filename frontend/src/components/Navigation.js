import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="global"> {/* Use "global" class for global navigation */}
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/topics" activeClassName="active">Topics</NavLink>
      {/* Add more NavLink components for other navigation links if needed */}
    </nav>
  );
}

export default Navigation;

