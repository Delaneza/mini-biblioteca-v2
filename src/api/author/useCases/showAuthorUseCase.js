import AppError from '../../../errors/index.js'
import Author from '../model/model.js'

export const showAuthorUseCase = async (id) => {
  const author = await Author.findByPk(id)

  if (!author) throw new AppError('Author not found.', 404)

  return author
}
