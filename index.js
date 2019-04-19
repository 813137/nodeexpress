let express = require('express')
let mainRouter = require('./mainRoutes')
let app = express()
let port = process.env.PORT || 3000

app.use(mainRouter)

app.listen(port)
console.log('Express server running on port ', port)
