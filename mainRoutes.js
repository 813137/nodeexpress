'use strict'

let express = require('express')
let path = require('path')
// create a Router object that will be used by the app to respond to
// HTTP requests
let mainRouter = express.Router()

mainRouter.get('/', function (req, res) {
  res.send('Hello World!')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter
