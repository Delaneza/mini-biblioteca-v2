import AppError from '../../../errors/index.js'
import Book from '../model/model.js'

export const showBookUseCase = async (id) => {
  const book = await Book.findByPk(id)

  if (!book) throw new AppError('Book not found.', 404)

  return book
}
