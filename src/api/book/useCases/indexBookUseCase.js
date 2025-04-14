import Book from '../model/model.js'

export const indexBookUseCase = async () => {
  const book = await Book.findAll()
  return book
}
