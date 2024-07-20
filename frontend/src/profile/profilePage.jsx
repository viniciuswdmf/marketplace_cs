import React, { Component } from 'react';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            // Adicione outros campos de perfil conforme necessário
        };
    }

    componentDidMount() {
        // Aqui você pode carregar os dados do perfil do usuário logado, por exemplo, de uma API
        // Exemplo:
        // axios.get('/api/profile')
        //     .then(response => {
        //         this.setState({
        //             username: response.data.username,
        //             email: response.data.email,
        //             // Atualize outros campos conforme necessário
        //         });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching profile data:', error);
        //     });
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="container mt-5 mb-5">
                    <h2>Perfil do Usuário</h2>
                    <form>
                        <div className="form-group">
                            <label>Nome de Usuário</label>
                            <input type="text" className="form-control" value={this.state.username} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={this.state.email} readOnly />
                        </div>
                        {/* Adicione outros campos conforme necessário */}
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProfilePage;
