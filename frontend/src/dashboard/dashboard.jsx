import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getSummary} from './dashboardActions'

class Dashboard extends Component{

        componentDidMount(){
        this.props.getSummary()
    }

    render(){
        const {credit, debt, save} = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versao 1.0'/>
                <Content>
                <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de creditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de debitos'/>
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit-debt}`} text='A guardar no mês'/>
                <ValueBox cols='12 4' color='yellow' icon='money' value={`R$ ${195+save+(credit-debt)}`} text='Total guardado para próximo mês'/>
                </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)