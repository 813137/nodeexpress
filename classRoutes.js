'use strict'

let express = require('express')
let path = require('path')

let router = express.Router()

let classList = []

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})

// RESTful api
router.get('/list', function (req, res) {
  res.json(classList) // Respond with JSON
})

router.get('/class/get/:id', function (req, res) {
  res.json(classList[req.params.id])
})

router.post('/create', function (req, res) {
  console.log('creating the following student:', req.body)
  classList.push(req.body) // create an object from all fields entered in a form
  res.redirect(req.baseUrl + '/')
})

router.post('/delete', function (req, res) {
  console.log('deleting the following student:', req.body)
  res.redirect(req.baseUrl + '/class/list')
  classList.forEach(element => {
    if (element.studentNumber === req.body.studentNumber) {
      classList.splice(element, 1)
    }
  })
})

router.post('/edit', function (req, res) {
  console.log('editing a student entry')
})

module.exports = router
