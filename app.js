var express = require('express')
var app = express()

// middleware to parse JSON bodies
app.use(express.json())


var AuthorController = require('./authors/AuthorController')
app.use('/api', AuthorController);

module.exports = app;