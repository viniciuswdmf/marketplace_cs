
import React from 'react';
import Header from '../common/template/header';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import WeaponForm from './weaponForm.jsx';

const WeaponSkins = () => {

    return (
        <div>
            <Menu />
            <Header />
            <WeaponForm/>
            <Footer />
        </div>
    );
};

export default WeaponSkins;
