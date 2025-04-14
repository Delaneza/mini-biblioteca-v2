import { Router } from 'express'
import { create, index, show, update, destroy } from '../controller/index.js'
import { middleware as body } from 'bodymen'
import Author from '../model/model.js'

const { name, email } = Author
const router = new Router()

// create
router.post('/', body(name, email), create)

// getAll
router.get('/', index)

// GetById
router.get('/:id', show)

// UpdateAuthor
router.put('/:id', body(name, email), update)

// DELETE
router.delete('/:id', destroy)

export default router
