import { Router } from 'express'
import { create, index, show, update, destroy } from '../controller/index.js'
import { middleware as body } from 'bodymen'
import Book from '../model/model.js'

const { title, genre, author_id } = Book

const router = new Router()

// create
router.post('/', body(title, genre, author_id), create)

// getAll
router.get('/', index)

// GetById
router.get('/:id', show)

// UpdateAuthor
router.put('/:id', body(title, genre), update)

// DELETE
router.delete('/:id', destroy)

export default router
