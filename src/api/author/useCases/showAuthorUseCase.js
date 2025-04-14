import AppError from '../../../errors/index.js'
import Author from '../model/model.js'
import Book from '../../book/model/model.js'

export const showAuthorUseCase = async (id) => {
  const author = await Author.findOne({
    where: { id },
    include: [
      {
        model: Book,
        as: 'books',
      },
    ],
  })
  if (!author) throw new AppError('Author not found.', 404)

  return author
}
