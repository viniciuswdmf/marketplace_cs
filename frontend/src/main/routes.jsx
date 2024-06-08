import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import ProductGrid from '../common/products/ProductGrid';
import AuthOrApp from './authOrApp'
import App from './App'

const Routes = () => {

    return (
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/weaponSkins" component={AuthOrApp} />
            <Redirect from="*" to="/" />
        </Router>
    );
};

export default Routes;
