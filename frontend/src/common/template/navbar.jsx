import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../auth/authActions';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, searchQuery: '' };
        this.changeOpen = this.changeOpen.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    changeOpen() {
        this.setState({ open: !this.state.open });
    }

    handleSearchChange(e) {
        this.setState({ searchQuery: e.target.value });
    }

    handleSearch() {
        const { searchQuery } = this.state;
        if (searchQuery.trim()) {
            window.location.href = `#/search?q=${searchQuery}`;
        }
    }

    render() {
        return (
            <div className="navbar-nav ml-auto">
                <form className="d-flex align-items-center">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar Skin"
                        aria-label="Search"
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                    />
                    <button
                        className="btn btn-outline-success ms-2"
                        type="button"
                        onClick={this.handleSearch}
                    >
                        Ok
                    </button>
                </form>
                <li className="nav-item dropdown ms-3">
                    <a href="#" className="nav-link dropdown-toggle" onClick={this.changeOpen}
                        aria-expanded={this.state.open ? 'true' : 'false'}
                        id="navbarDropdown" role="button" data-toggle="dropdown">
                        <img src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" className="rounded-circle" alt="User" width="15" height="15" />
                    </a>
                    <div className={`dropdown-menu dropdown-menu-right ${this.state.open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#/profile">Perfil</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={this.props.logout}>Sair</a>
                    </div>
                </li>
            </div>
        );
    }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
