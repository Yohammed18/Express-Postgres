var express = require('express')
var app = express()
var AuthorController = require('./authors/AuthorController')

// middleware to parse JSON bodies
app.use(express.json())


//set the uri 
app.use('/api', AuthorController);

module.exports = app;