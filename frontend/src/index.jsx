import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './main/routes'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
<Provider store={store}>
    <Routes/>
    </Provider>
, document.getElementById('app'))


