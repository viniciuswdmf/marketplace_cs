import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import WeaponDetails from './weaponDetails.jsx';

class WeaponDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    componentDidMount() {
        const { params } = this.props;
        const productId = params.id;

        axios.get(`http://localhost:3003/api/weaponSkins/${productId}`)
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <Menu />
                {product ? (
                    <WeaponDetails product={product} />
                ) : (
                    <div>Loading...</div>
                )}
                <Footer />
            </div>
        );
    }
}

export default WeaponDetailsPage;
