import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductStyles.css'; // Importe o arquivo CSS

class ProductGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { products } = this.props;
        const { currentPage } = this.state;
        const itemsPerPage = 12;

        if (!products) {
            return <div>Loading products...</div>;
        }

        // Inverte a ordem dos produtos
        const reversedProducts = [...products].reverse();

        // Calcula o número de páginas
        const totalPages = Math.ceil(reversedProducts.length / itemsPerPage);

        // Obtem os produtos da página atual
        const startIndex = (currentPage - 1) * itemsPerPage;
        const currentProducts = reversedProducts.slice(startIndex, startIndex + itemsPerPage);

        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        {currentProducts.map(product => (
                            <div className="col-3 mb-5" key={product._id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                    {/* Controles de paginação */}
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                onClick={() => this.handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductGrid;
