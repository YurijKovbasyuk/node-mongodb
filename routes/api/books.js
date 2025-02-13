const express = require("express")
const ctrl = require("../../controllers/books")

const { validateBody, isValidId, authenticate } = require('../../middlewares')

const { shemas } = require('../../models/book')

const router = express.Router()

router.get('/', authenticate, ctrl.getAll)

router.get('/:id', authenticate, isValidId, ctrl.getById)

router.post('/', authenticate, validateBody(shemas.addShema), ctrl.add)

router.put('/:id', authenticate, isValidId, validateBody(shemas.addShema), ctrl.updateById)

router.patch('/:id/favorite', authenticate, isValidId, validateBody(shemas.updateFavoriteShemas), ctrl.updateFavorite)

router.delete('/:id', authenticate, isValidId, ctrl.deleteById)

module.exports = router