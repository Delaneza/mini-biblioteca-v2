import 'dotenv/config'
import express from 'express'
import routes from './api/index.js'
import db from '../config/database.js'
import { errorHandler } from './errors/index.js'

const app = express()

app.use(express.json())
app.use('/', routes)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})
