import React from 'react';

const MenuTree = ({ label, children }) => (
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      {label}
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {children}
    </ul>
  </li>
);

export default MenuTree;
