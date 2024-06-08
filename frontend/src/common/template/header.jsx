import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Buscador de Skins CS GO</h1>
                <p className="lead fw-normal text-white-50 mb-0">Aqui você encontra o melhor preço para a skin desejada</p>
            </div>
        </div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
        </nav>
    </header>
)
