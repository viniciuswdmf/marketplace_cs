import '../common/template/dependencies.js';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../auth/auth.jsx';
import { validateToken } from '../auth/authActions.js';
import ProfilePage from '../profile/profilePage.jsx';

class AuthOrAppProfile extends Component {
    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token);
        }
    }

    render() {
        const { user, validToken } = this.props.auth;
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = user.token;
            return <ProfilePage/>;
        } else if (!user && !validToken) {
            return <Auth />;
        } else {
            return false;
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrAppProfile);
