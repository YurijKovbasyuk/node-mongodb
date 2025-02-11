const express = require('express')
// const moment = require('moment')
const cors = require('cors')
// const dotenv = require('dotenv')
require('dotenv').config()
const logger = require('morgan')

const booksRouter = require('./routes/api/books.js')

// dotenv.config()

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())

app.use(express.json())

// app.use(async (req, res, next) => {
//     const { method, url } = req
//     const date = moment().format('DD-MM-YYYY_hh:mm:ss')
//     await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`)
//     next()
// })

app.get('/', (req, res) => {
    res.send('home page')
})

app.use('/api/books/', booksRouter)

// app.get('/api/contacts', (req, res) => {
// console.log(req.url)
// console.log(req.method)
// res.send(contacts)
// res.json(null)
//     res.json(contacts)
// })

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