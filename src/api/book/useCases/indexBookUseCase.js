import Book from '../model/model.js'

export const indexBookUseCase = async ({ query }) => {
  const book = await Book.findAll({ where: query })
  return book
}
