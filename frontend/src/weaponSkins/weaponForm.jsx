import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import FileInput from '../common/form/fileInput'
import { init } from './weaponSkinsActions'
import Messages from '../common/msg/messages'

class WeaponForm extends Component {

    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }


    handleReset() {
        const { reset } = this.props;
        this.props.reset(); // Reset redux-form fields
    }
    
    render() {
        const { handleSubmit } = this.props
        return(
    
    <div className="container mt-5 mb-5">
    <h2>Cadastrar Skin</h2>
    <form onSubmit={handleSubmit}>
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
        <Field name="urlImagem" component={LabelAndInput} label="URL da    Foto da skin" cols="6 6" placeholder="Coloque uma foto da skin"
      /> 
        </div>
        <div className="row">
            <div className="col-md-6 mb-3">
                <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
            </div>
            <div className="col-md-6 mb-3">
                <button type="reset" className="btn btn-warning w-100"  onClick={this.handleReset}>Limpar</button>
            </div>
            <Messages />
        </div>
    </form>
</div>

        )
    }
}

WeaponForm = reduxForm({form: 'weaponForm', destroyOnUnmount: false})(WeaponForm)
const mapDispatchToProps = dispatch => bindActionCreators({init, reset: reduxForm.reset}, dispatch)
export default connect(mapDispatchToProps)(WeaponForm)