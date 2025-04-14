import AppError from '../../../errors/index.js'
import Book from '../model/model.js'

export const deleteBookUseCase = async (id) => {
  const book = await Book.findByPk(id)
  if (!book) throw new AppError('Book not found.', 404)

  await book.destroy()
  return { message: 'Book removed successfully.' }
}
