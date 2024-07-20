import React, { Component } from 'react';
import axios from 'axios';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer.jsx';
import ProductCard from '../common/products/ProductCard.jsx';
import ProductGrid from '../common/products/ProductGrid.jsx';

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            results: []
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(window.location.hash.split('?')[1]);
        const searchQuery = query.get('q');

        if (searchQuery) {
            this.setState({ searchQuery }, () => {
                this.performSearch();
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const query = new URLSearchParams(window.location.hash.split('?')[1]);
        const searchQuery = query.get('q');

        if (searchQuery !== this.state.searchQuery) {
            this.setState({ searchQuery }, () => {
                this.performSearch();
            });
        }
    }

    performSearch() {
        axios.get(`http://localhost:3003/api/weaponSkins/search?q=${this.state.searchQuery}`)
            .then(response => {
                this.setState({ results: response.data });
            })
            .catch(error => {
                console.error('Error performing search:', error);
            });
    }

    render() {
        const { results } = this.state;

        return (
            <div>
                <Menu />
                <div className="container mt-5 mb-5">
                    <h3>Skins encontradas:</h3>
                    <div className="row">
                        {results.length > 0 ? (
                            results.map(product => (
                                <div className="col-md-4 mb-4" key={product._id}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        ) : (
                            <div className="col-md-12">
                                <div className="card h-100 d-flex align-items-center justify-content-center">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Skin não encontrada.</h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SearchResultsPage;
