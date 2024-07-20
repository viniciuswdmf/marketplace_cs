import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/template/header';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import ProductGrid from '../common/products/ProductGrid.jsx';
import CategoryMenu from '../common/template/categoryMenu.jsx';
import { getList, getByCategory } from '../weaponSkins/weaponSkinsActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSelectCategory = this.handleSelectCategory.bind(this);
    }

    componentDidMount() {
        this.props.getList();
    }

    handleSelectCategory(category) {
        this.props.getByCategory(category);
    }

    render() {
        const { products } = this.props;
        const hasProducts = products && products.length > 0;

        return (
            <div>
                <Menu />
                <Header />
                <CategoryMenu onSelectCategory={this.handleSelectCategory} />
                <div className="container mt-5 mb-5">
                    {hasProducts ? (
                        <ProductGrid products={products} />
                    ) : (
                        <div className="row" style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <p className="card-text">Nenhuma arma para a categoria selecionada.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.weaponSkins.list
});

const mapDispatchToProps = {
    getList,
    getByCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
