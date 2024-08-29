var express = require('express')
var app = express()
var AuthorController = require('./authors/AuthorController')
var AuthController = require('./auth/AuthController')
var cors = require('cors')

// middleware to parse JSON bodies
app.use(cors())
app.use(express.json())


//set the uri 
app.use('/api', AuthorController);

//set uri for authentication
app.use('/auth', AuthController);

module.exports = app;