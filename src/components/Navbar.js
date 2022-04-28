import React from 'react';

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
            <a href={path}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
