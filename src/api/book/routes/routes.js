import { Router } from 'express'
import { create, index, show, update, destroy } from '../controller/index.js'
import { middleware as body } from 'bodymen'
import { middleware as query } from 'querymen'
import Book from '../model/model.js'

const { title, genre, author_id } = Book

const router = new Router()

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Endpoints para gerenciamento de livros
 */

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Criar novo livro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - genre
 *               - author_id
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *               author_id:
 *                 type: string
 *                 description: ID do autor
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', body({ title, genre, author_id }), create)

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Listar livros
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *       - in: query
 *         name: author_id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de livros
 */
router.get('/', query({ title, genre, author_id }), index)

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Buscar livro por ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro não encontrado
 */
router.get('/:id', show)

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Atualizar livro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               genre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Livro não encontrado
 */
router.put('/:id', body({ title, genre }), update)

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remover livro
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do livro
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Livro removido com sucesso
 *       404:
 *         description: Livro não encontrado
 */
router.delete('/:id', destroy)

export default router
