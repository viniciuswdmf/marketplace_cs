import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/template/header';
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import ProductGrid from '../common/products/ProductGrid.jsx';
import { getList } from '../weaponSkins/weaponSkinsActions.js'; // Verifique o caminho correto da sua action

class App extends Component {
    componentDidMount() {
        this.props.getList(); // Dispara a ação para buscar os produtos do backend
    }

    render() {
        const { products } = this.props;
        return (
            <div>
                <Menu />
                <Header />
                <ProductGrid products={products} /> {/* Passa os produtos para o ProductGrid */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.weaponSkins.list // Mapeia a lista de produtos do estado Redux
});

const mapDispatchToProps = {
    getList // Ação para buscar os produtos
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
