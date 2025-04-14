import 'dotenv/config'
import express from 'express'
import routes from './api/index.js'
import { errorHandler } from './errors/index.js'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../config/swagger.js'

const app = express()

app.use(express.json())

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/', routes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})
