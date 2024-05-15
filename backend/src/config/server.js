const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })) //pra toda requisiçao use o bodyparser se vier urlencoded
server.use(bodyParser.json())//pra toda requisiçao use o bodyparser se vier json
server.use(allowCors)
server.use(queryParser())

server.listen(port, function() {  //escutar a porta, caso o servidor rode exibe a mensagem
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server 