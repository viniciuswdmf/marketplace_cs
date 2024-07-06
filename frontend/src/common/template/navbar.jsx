import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        // const { name, email } = this.props.user
        return (
            <div className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" onClick={() => this.changeOpen()}
                        aria-expanded={this.state.open ? 'true' : 'false'}
                        id="navbarDropdown" role="button" data-toggle="dropdown">
                        <img src="https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid" className="rounded-circle" alt="User" width="15" height="15"  />
                        {/* <span className="d-none d-lg-inline">{name}</span> */}
                    </a>
                    <div className={`dropdown-menu dropdown-menu-right ${this.state.open ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Perfil</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={this.props.logout}>Sair</a>
                    </div>
                </li>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
