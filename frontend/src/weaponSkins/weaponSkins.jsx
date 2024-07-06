
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../common/template/menu.jsx';
import Footer from '../common/template/footer';
import WeaponForm from './weaponForm.jsx';
import ProductGridList from '../common/products/ProductGridList.jsx';
import { init, create, update, remove, getList } from './weaponSkinsActions.js'
class WeaponSkins extends Component{
    componentWillMount(){
        this.props.init()
        this.props.getList();
    }
    render(){
        const { products } = this.props;
    return(
     <div>
        <Menu />
        <WeaponForm onSubmit={this.props.create}/>
        <h2 className="text-center">Lista de Skins Cadastradas</h2>
        <ProductGridList products={products} /> {/* Passa os produtos para o ProductGrid */}
        <Footer />
    </div>)
        
    };
};

const mapStateToProps = state => ({
    products: state.weaponSkins.list // Mapeia a lista de produtos do estado Redux
});

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove, getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(WeaponSkins)





