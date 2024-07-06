// src/main/routes.js

import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import App from './App';
import AuthOrApp from './authOrApp';
import AuthOrAppEdit from './authOrAppEdit';
import WeaponDetailsPage from '../weaponSkins/weaponDetailsPage';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/weaponSkins" component={AuthOrApp} />
            <Route path="/weaponEdit/:id" component={AuthOrAppEdit} />
            <Route path="/weaponDetails/:id" component={WeaponDetailsPage} />
            <Redirect from="*" to="/" />
        </Router>
    );
};

export default Routes;
