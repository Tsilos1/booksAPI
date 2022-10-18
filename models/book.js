// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String,
})

// model and export: 
const Book = mongoose.model('book', bookSchema)
module.exports = Book
