import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, change } from 'redux-form';
import axios from 'axios';
import { update } from './weaponSkinsActions';
import LabelAndInput from '../common/form/labelAndInput';
import Messages from '../common/msg/messages';

class WeaponEdit extends Component {
    constructor(props) {
        super(props);
        // Bind da função handleSubmit ao contexto da classe
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { params } = this.props;
        const productId = params.id;

        axios.get(`http://localhost:3003/api/weaponSkins/${productId}`)
            .then(response => {
                const product = response.data;
                // Atualiza o formulário com os dados do produto
                Object.keys(product).forEach(key => {
                    this.props.dispatch(change('weaponEditForm', key, product[key]));
                });
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }

    // Método para lidar com o envio do formulário
    handleSubmit(formValues) {
        const { params } = this.props;
        const productId = params.id;
        this.props.update({ ...formValues, _id: productId });
    }

    handleBackClick() {
        window.history.back(); // Volta para a página anterior
    }

    render() {
        // Obtém a função handleSubmit do redux-form
        const { handleSubmit } = this.props;
        
        return (
            <div className="container mt-5 mb-5">
                <h2>Editar Skin</h2>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="row">
                        <Field name='nomeSkin' component={LabelAndInput}
                            label='Nome da Skin' cols='6 6' placeholder='Informe o nome da skin' />
                        <Field name='qualidadeSkin' component={LabelAndInput}
                            label='Qualidade da Skin' cols='6 6' placeholder='Informe a qualidade da skin' />
                    </div>
                    <div className="row">
                        <Field name='descricaoSkin' component={LabelAndInput}
                            label='Descrição da Skin' cols='6 6' placeholder='Informe a descrição da skin' />
                        <Field name='colecaoSkin' component={LabelAndInput}
                            label='Coleção da Skin' cols='6 6' placeholder='Informe a coleção da skin' />
                    </div>
                    <div className="row">
                        <Field name='nomeArma' component={LabelAndInput}
                            label='Nome da Arma' cols='6 6' placeholder='Informe o nome da Arma' />
                        <Field name='categoriaArma' component={LabelAndInput}
                            label='Categoria da Arma' cols='6 6' placeholder='Informe a categoria da Arma' />
                    </div>
                    <div className="row">
                        <Field name='precoMedio' component={LabelAndInput}
                            label='Preço médio da Arma' cols='6 6' placeholder='Informe o preço médio da Arma' />
                        <Field name='sitesDisponiveis' component={LabelAndInput}
                            label='Sites Disponiveis' cols='6 6' placeholder='Informe os sites onde há a arma' />
                    </div>
                    <div className="row">
                        <Field name='melhorPreco' component={LabelAndInput}
                            label='Melhor Preço' cols='6 6' placeholder='Informe o melhor preço' />
                        <Field name='siteMelhorPreco' component={LabelAndInput}
                            label='Site com Melhor Preço' cols='6 6' placeholder='Informe o site com melhor preço' />
                    </div>
                    <div className="row">
                        <Field name="urlImagem" component={LabelAndInput} label="URL da Foto da skin" cols="6 6" placeholder="Coloque uma foto da skin" />
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <button type="submit" className="btn btn-primary w-100" onClick={this.handleBackClick}>Salvar</button>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button type="button"  className="btn btn-secondary w-100" onClick={this.handleBackClick}>Voltar</button>
                        </div>
                        <Messages />
                    </div>
                </form>
            </div>
        );
    }
}

// Configura o redux-form para o componente WeaponEdit
WeaponEdit = reduxForm({
    form: 'weaponEditForm',
    destroyOnUnmount: false
})(WeaponEdit);

// Conecta o componente ao Redux
const mapDispatchToProps = dispatch => bindActionCreators({ update }, dispatch);

export default connect(null, mapDispatchToProps)(WeaponEdit);
