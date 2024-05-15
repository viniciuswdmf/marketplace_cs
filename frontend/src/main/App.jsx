import '../common/template/dependencies.js'
import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper'>
        <Routes></Routes>
        </div>
        <Footer/>
        <Messages/>
    </div>
)
