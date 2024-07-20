// src/main/routes.js

import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import App from './App';
import AuthOrApp from './authOrApp';
import AuthOrAppEdit from './authOrAppEdit';
import WeaponDetailsPage from '../weaponSkins/weaponDetailsPage';
import SearchResultsPage from '../weaponSkins/SearchResultsPage';
import authOrAppProfile from './authOrAppProfile';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/weaponSkins" component={AuthOrApp} />
            <Route path="/weaponEdit/:id" component={AuthOrAppEdit} />
            <Route path="/weaponDetails/:id" component={WeaponDetailsPage} />
            <Route path='search' component={SearchResultsPage} />
            <Route path='/profile' component={authOrAppProfile} />
            <Redirect from="*" to="/" />
        </Router>
    );
};

export default Routes;
