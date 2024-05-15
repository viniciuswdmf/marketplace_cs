
import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from  '../common/widget/valueBox'
import Row from  '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

export default class TotalSaves extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/totalSaves/summary`)
            .then(resp => this.setState(resp.data))
    }

    render() {
        const { currentValue, incomingMonthValue, totalValue = currentValue } = this.state
        return (
            <div> 
                <ContentHeader title='Dashboard' small='Versão 3.0' />
                <Content>
                    <Row> 
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${currentValue}`} text='Guardado atual' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${incomingMonthValue}`} text='Guardado no mês' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${currentValue + incomingMonthValue}`} text='Total' />
                    </Row> 
                </Content> 
            </div>
        )
    }
}