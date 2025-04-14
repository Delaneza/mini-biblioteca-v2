import sequelize from '../config/database.js'
import Author from '../src/api/author/model/model.js'
import Book from '../src/api/book/model/model.js'

async function loadInitialData() {
  try {
    await sequelize.authenticate()
    console.log('Loading initial data')

    // await sequelize.sync({ force: true })

    // Carga inicial autores
    const author1 = await Author.create({
      name: 'J.K. Rowling',
      email: 'jk.rowling@example.com',
    })

    const author2 = await Author.create({
      name: 'George R.R. Martin',
      email: 'george.martin@example.com',
    })

    console.log('Authors created successfully.')

    // Carga inicial livros
    await Book.bulkCreate([
      {
        title: 'Harry Potter e a Pedra Filosofal',
        genre: 'Fantasia',
        author_id: author1.id,
      },
      {
        title: 'Harry Potter e a Câmara Secreta',
        genre: 'Fantasia',
        author_id: author1.id,
      },
      {
        title: 'A Guerra dos Tronos',
        genre: 'Fantasia',
        author_id: author2.id,
      },
      {
        title: 'A Fúria dos Reis',
        genre: 'Fantasia',
        author_id: author2.id,
      },
    ])

    console.log('Books created successfully.')
  } catch (error) {
    console.error('Error performing initial data:', error)
  }
}

loadInitialData()
