'use strict'

// Import the necessary modules for routing and path manipulation
let express = require('express')

let app = express()

let mainRouter = require('./mainRoutes')
let classRouter = require('./classRoutes')

app.use(mainRouter)
app.use('/class', classRouter)
let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port 3000')
