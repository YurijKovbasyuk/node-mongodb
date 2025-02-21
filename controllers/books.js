const { Book } = require('../models/book')

const { HttpError, ctrlWrapper } = require('../helpers/index.js')

const getAll = async (req, res, next) => {
    const { _id: owner } = req.user
    const { page = 1, limit = 10 } = req.query
    const skip = (page - 1) * limit
    const result = await Book.find({}, '-createdAt -updatedAt', { skip, limit }).populate('owner', 'name email')
    res.json(result)
}

const getById = async (req, res, next) => {
    const { id } = req.params
    // const result = await Book.findOne({ _id: id })
    const result = await Book.findById(id)
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.json(result)
}

const add = async (req, res, next) => {
    const { _id: owner } = req.user
    const result = await Book.create({ ...req.body, owner })
    res.status(201).json(result)
}

const updateById = async (req, res, next) => {
    const { id } = req.params
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.json(result)
}

const updateFavorite = async (req, res, next) => {
    const { id } = req.params
    const result = await Book.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        throw HttpError(404, 'Not found')
    }
    res.json(result)
}

const deleteById = async (req, res, next) => {
    const { id } = req.params
    const result = await Book.findByIdAndDelete(id)
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
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
}