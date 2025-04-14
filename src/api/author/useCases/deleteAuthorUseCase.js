import AppError from '../../../errors/index.js'
import Author from '../model/model.js'

export const deleteAuthorUseCase = async (id) => {
  const author = await Author.findByPk(id)
  if (!author) throw new AppError('Autor not found.', 404)

  await author.destroy()
  return { message: 'Author removed successfully.' }
}
