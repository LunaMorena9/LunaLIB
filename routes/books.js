const express = require('express')
const router = express.Router()
const Book = require('../models/book')

let locals = { errorMessage : `something went wrong` }

// All Book Route
router.get('/', async (req, res) => {
  res.send('All Books')
})

//New Book Route
router.get('/new', (req, res) => {
  res.send('New Book')  
})

//Create Book route
router.post('/', async (req, res) => {
  res.send('Create Book')
})

module.exports = router