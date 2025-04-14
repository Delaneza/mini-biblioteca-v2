import AppError from '../../../errors/index.js'
import Author from '../model/model.js'

export const updateAuthorUseCase = async (id, body) => {
  const author = await Author.findByPk(id)

  if (!author) throw new AppError('Author not found.', 404)

  await author.update(body)
  return author
}
