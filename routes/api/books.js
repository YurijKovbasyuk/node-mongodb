const express = require("express")
const ctrl = require("../../controllers/books")

const { validateBody } = require('../../middlewares')

const shemas = require('../../shemas/books')

const router = express.Router()

router.get('/', ctrl.getAll)

// router.get('/:id', ctrl.getById)

// router.post('/', validateBody(shemas.addShema), ctrl.add)

// router.put('/:id', validateBody(shemas.addShema), ctrl.updateById)

// router.delete('/:id', ctrl.deleteById)

module.exports = router