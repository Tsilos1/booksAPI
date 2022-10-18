const express = require('express')
const mongoose = require('mongoose')
const booksController = require('./controllers/books_Controller')
var cors = require('cors')

// const languages = express.Router()
// const { Router } = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true}, 
      () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

app.use(express.urlencoded({extended: true}))

app.use(cors())

//Root Index:
app.get ('/', (req, res) => {
    res.send('Welcome to the library!')
})

app.use('/books', booksController)

app.listen(PORT, () => {
  console.log('Hello from your librarian! ', PORT);
})