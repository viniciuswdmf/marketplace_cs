import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt, save}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 3' color='green' icon='bank'
                    value={`R$ ${credit}`} text='Total de Créditos' />
                <ValueBox cols='12 3' color='red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total de Débitos' />
                <ValueBox cols='12 3' color='blue' icon='money'
                    value={`R$ ${credit - debt}`} text='Valor a Guardar' />
                <ValueBox cols='12 3' color='yellow' icon='money'
                    value={`R$ ${save+(credit-debt)}`} text='Valor guardado' />
            </Row>
        </fieldset>
    </Grid>
)