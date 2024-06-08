import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init, create } from './weaponSkinsActions'

class WeaponForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return(
    
    <div className="container mt-5 mb-5">
    <h2>Cadastrar Skin</h2>
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">Nome da Skin</label>
                <input
                    type="text"
                    className="form-control"
                    name="nomeSkin"
                />
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Qualidade da Skin</label>
                <input
                    type="text"
                    className="form-control"
                    name="qualidadeSkin"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">Descrição da Skin</label>
                <textarea
                    className="form-control"
                    name="descricaoSkin"
                ></textarea>
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Coleção da Skin</label>
                <input
                    type="text"
                    className="form-control"
                    name="colecaoSkin"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">Nome da Arma</label>
                <input
                    type="text"
                    className="form-control"
                    name="nomeArma"
                />
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Categoria da Arma</label>
                <input
                    type="text"
                    className="form-control"
                    name="categoriaArma"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">Preço Médio</label>
                <input
                    type="number"
                    className="form-control"
                    name="precoMedio"
                />
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Sites Disponíveis</label>
                <input
                    type="text"
                    className="form-control"
                    name="sitesDisponiveis"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <label className="form-label">Melhor Preço</label>
                <input
                    type="number"
                    className="form-control"
                    name="melhorPreco"
                />
            </div>
            <div className="col-md-6 mb-3">
                <label className="form-label">Site com Melhor Preço</label>
                <input
                    type="text"
                    className="form-control"
                    name="siteMelhorPreco"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
            </div>
            <div className="col-md-6 mb-3">
                <button type="reset" className="btn btn-warning w-100" onClick={this.props.init}>Limpar</button>
            </div>
        </div>
    </form>
</div>

        )
    }
}

WeaponForm = reduxForm({form: 'weaponForm', destroyOnUnmount: false,  onSubmit: (values) => {
    create,
    console.log('Formulário submetido com sucesso!', values);
}})(WeaponForm)
const selector = formValueSelector('weaponForm')
const mapStateToProps = state => ({
    sitesDisponiveis: selector(state, 'sitesDisponiveis'),
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(WeaponForm)