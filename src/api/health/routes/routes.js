import { Router } from 'express'
import { health } from '../controller/index.js'

const router = Router()

router.get('/', health)

export default router
