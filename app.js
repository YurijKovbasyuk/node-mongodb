const express = require('express')
const cors = require('cors')
require('dotenv').config()

const booksRouter = require('./routes/api/books.js')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send('home page')
})

app.use('/api/books/', booksRouter)

app.use((req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server eror' } = err
    res.status(status).json({ message })
})

module.exports = app