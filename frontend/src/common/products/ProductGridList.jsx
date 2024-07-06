import React, { Component } from 'react';
import ProductCardList from './ProductCardList';
import './ProductStylesList.css'; // Certifique-se de que o CSS foi atualizado
import { remove } from '../../weaponSkins/weaponSkinsActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductGridList extends Component {
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
        const { products, remove } = this.props;
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
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Skin</th>
                                <th>Qualidade</th>
                                <th>Descrição</th>
                                <th>Coleção</th>
                                <th>Arma</th>
                                <th>Categoria</th>
                                <th>Preço Médio</th>
                                <th>Melhor Preço</th>
                                <th>Site Melhor</th>
                                <th>Sites Disponíveis</th>
                                <th>Imagem</th>
                                <th>Alterar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map(product => (
                                <ProductCardList
                                    key={product._id}
                                    product={product}
                                    onDelete={remove}
                                />
                            ))}
                        </tbody>
                    </table>
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

const mapDispatchToProps = dispatch => bindActionCreators({
    remove
}, dispatch);

export default connect(null, mapDispatchToProps)(ProductGridList);
