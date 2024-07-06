import '../common/template/dependencies.js';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../auth/auth.jsx';
import WeaponEdit from '../weaponSkins/weaponEdit.jsx';
import { validateToken } from '../auth/authActions.js';

class AuthOrAppEdit extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token);
        }
    }

    render() {
        const { user, validToken } = this.props.auth;
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token;
            return <WeaponEdit params={this.props.params} />;
        } else if (!user && !validToken) {
            return <Auth />;
        } else {
            return false;
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrAppEdit);
