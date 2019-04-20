'use strict'

let express = require('express')
let path = require('path')

let router = express.Router()

let classList = []

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.post('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
