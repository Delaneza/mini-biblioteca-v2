import Author from '../../author/model/model.js'
import AppError from '../../../errors/index.js'
import Book from '../model/model.js'

export const createBookUseCase = async (body) => {
  const { author_id } = body
  if (!author_id) throw new AppError('Author id is required!', 400)

  const author = await Author.findOne({
    where: { id: author_id },
  })

  if (!author) throw new AppError(`Author id ${author_id} not found.`, 404)

  const result = await Book.create(body)
  return result
}
