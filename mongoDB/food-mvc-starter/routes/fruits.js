import express from 'express'

import fruitController from '../controllers/fruits.js'

const router = express.Router()

router.get('/', fruitController.index)
router.get('/new', fruitController.new)
router.delete('/:id', fruitController.delete)
router.put('/:id', fruitController.update)
router.post('/create', fruitController.create)
router.get('/:id/edit', fruitController.edit)
router.get('/seed', fruitController.seed)
router.get('/:id', fruitController.show)

export default router