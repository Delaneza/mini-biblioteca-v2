import AppError from '../../../errors/index.js'
import Book from '../model/model.js'

export const updateBookUseCase = async (id, body) => {
  const book = await Book.findByPk(id)

  if (!book) throw new AppError('Book not found.', 404)

  await book.update(body)
  return book
}
