import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <nav className="navBar">
      <h1>Math Magicians</h1>
      <ul className="navList">
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
