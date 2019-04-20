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

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id])
})

router.post('/api/create', function (req, res) {
  console.log('creating a student entry')
})

router.post('api/delete', function (req, res) {
  console.log('deleting a sttudent entry')
})

router.post('api/edit', function (req, res) {
  console.log('editing a student entry')
})

module.exports = router
