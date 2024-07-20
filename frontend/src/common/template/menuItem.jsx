import React from 'react';

const MenuItem = ({ path, label, isActive, onClick }) => (
  <li className="nav-item">
    <a
      className={`nav-link ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
      href={path}
      onClick={onClick}
    >
      {label}
    </a>
  </li>
);

export default MenuItem;
