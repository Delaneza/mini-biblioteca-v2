import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentação da API',
      version: '1.0.0',
    },
  },
  apis: ['./src/api/**/*.js'], // Caminho dos arquivos com os comentários JSDoc
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
