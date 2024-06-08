const express = require('express')
const auth = require('./auth')
module.exports = function (server) {
    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    const weaponSkins = require('../api/weaponSkins/weaponSkinsService')
    weaponSkins.register(protectedApi, '/weaponSkins')
    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}
