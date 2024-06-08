import React from 'react';

const MenuItem = ({ path, label, isActive }) => (
  <li className="nav-item">
    <a className={`nav-link ${isActive ? 'active' : ''}`} aria-current={isActive ? 'page' : undefined} href={path}>
      {label}
    </a>
  </li>
);

export default MenuItem;
