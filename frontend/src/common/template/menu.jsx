import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';
import Navbar from './navbar'

const Menu = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <MenuItem path="#!" label="Home" isActive />
          <MenuItem path="#/weaponSkins" label="Armas Cadastradas/Cadastrar" />
          
          <div className='collapse navbar-collapse' id='navbarNav'>
                <Navbar />
            </div>
        </ul>
      </div>
    </div>
  </nav>
);

export default Menu;
