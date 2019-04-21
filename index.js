'use strict'

// Import the necessary modules for routing and path manipulation
let express = require('express')

let app = express()

// lading body parser
let bodyParser = require('body-parser')
let mainRouter = require('./mainRoutes')
let classRouter = require('./classRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', mainRouter)
app.use('/class', classRouter)
app.use('/cdn', express.static('public'))

let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port 3000')
