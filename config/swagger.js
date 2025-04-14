import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
    },
  },
  apis: ['./src/api/**/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
