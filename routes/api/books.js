const express = require("express")
const ctrl = require("../../controllers/books")

const { validateBody, isValidId } = require('../../middlewares')

const { shemas } = require('../../models/book')

const router = express.Router()

router.get('/', ctrl.getAll)

router.get('/:id', isValidId, ctrl.getById)

router.post('/', validateBody(shemas.addShema), ctrl.add)

router.put('/:id', isValidId, validateBody(shemas.addShema), ctrl.updateById)

router.patch('/:id/favorite', isValidId, validateBody(shemas.updateFavoriteShemas), ctrl.updateFavorite)

router.delete('/:id', isValidId, ctrl.deleteById)

module.exports = router