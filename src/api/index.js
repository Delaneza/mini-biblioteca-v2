import { Router } from 'express'
import author from './author/routes/routes.js'
import book from './book/routes/routes.js'
import health from './health/routes/routes.js'

const router = new Router()

router.use('/authors', author)
router.use('/books', book)
router.use('/health', health)

export default router
