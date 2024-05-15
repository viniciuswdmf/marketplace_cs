import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

import './custom/customList.css'
class BillingCycleList extends Component {

    componentWillMount(){
        this.props.getList()
        console.log(this.props.list)
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td className='fontsize'>{bc.name}</td>
                <td className='fontsize'>{bc.month}</td>
                <td className='fontsize'>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='table-actions'>Nome</th>
                            <th className='table-actions'>Mês</th>
                            <th className='table-actions'>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
