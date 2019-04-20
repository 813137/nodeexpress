'use strict'

// Import the necessary modules for routing and path manipulation
let express = require('express')
let mainRouter = require('./mainRoutes')
let app = express()

app.use(mainRouter)
app.listen(3000)
console.log('Express server running on port 3000')
