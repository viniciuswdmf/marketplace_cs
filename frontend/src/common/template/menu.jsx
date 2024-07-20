import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from './menuItem';
import Navbar from './navbar';
import { getList } from '../../weaponSkins/weaponSkinsActions'; // Importar a ação getList

const Menu = ({ getList }) => {

  const handleHomeClick = () => {
    getList(); // Chama a ação para resetar o filtro e obter a lista completa
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <MenuItem path="#!" label="Home" isActive onClick={handleHomeClick} />
            <MenuItem path="#/weaponSkins" label="Armas Cadastradas/Cadastrar" />
          </ul>
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);

export default connect(null, mapDispatchToProps)(Menu);
