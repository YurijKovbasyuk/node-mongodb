const books = require('../models/books')

const { HttpError, ctrlWrapper } = require('../hlepers/index.js')

const getAll = async (req, res, next) => {
    const result = await books.getAll()
    res.json(result)
}

const getById = async (req, res, next) => {
    const { id } = req.params
    const result = await books.getById(id)
    if (!result) {
        throw HttpError(404, 'Not found')
        // const error = new Error('Not found')
        // error.status = 404
        // throw error
        // return res.status(404).json({
        //     message: 'Not found'
        // })
    }
    res.json(result)
}

const add = async (req, res, next) => {
    const { title, author } = req.body
    const result = await books.add(title, author)
    res.status(201).json(result)
}

const updateById = async (req, res, next) => {
    const { id } = req.params
    const result = await books.updateById(id, req.body)
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.json(result)
}

const deleteById = async (req, res, next) => {
    const { id } = req.params
    const result = await books.removeById(id)
    console.log('result;', result)
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.status(200).json(result)
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}