import 'dotenv/config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,
  }
)

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connected to MySQL!')
  } catch (err) {
    console.error('Error connecting to MySQL:', err.message)
  }
}

testConnection()

export default sequelize
