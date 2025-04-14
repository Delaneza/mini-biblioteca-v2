import { Router } from 'express'
import { create, index, show, update, destroy } from '../controller/index.js'
import { middleware as body } from 'bodymen'
import { middleware as query } from 'querymen'
import Author from '../model/model.js'

const { name, email } = Author
const router = new Router()

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Endpoints para gerenciamento de autores
 */

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Criar um novo autor
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor criado com sucesso
 */
router.post('/', body({ name, email }), create)

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Listar autores
 *     tags: [Authors]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de autores
 */
router.get(
  '/',
  query({
    name: { default: null },
    email,
  }),
  index
)

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Buscar autor por ID
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor não encontrado
 */
router.get('/:id', show)

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Atualizar autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Autor atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Autor não encontrado
 */
router.put('/:id', body({ name, email }), update)

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Remover autor
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do autor
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Autor removido com sucesso
 *       404:
 *         description: Autor não encontrado
 */
router.delete('/:id', destroy)

export default router
