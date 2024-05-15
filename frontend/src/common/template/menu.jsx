import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='DashBoard' icon='dashboard'></MenuItem>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Ciclos de pagamentos' icon='usd' id='menuCiclo'></MenuItem>
            <MenuItem path='#totalSaves' label='Dinheiro guardado' icon='money' id='menuGuardado'></MenuItem>
        </MenuTree>
    </ul>
)