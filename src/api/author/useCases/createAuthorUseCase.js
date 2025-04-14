import AppError from '../../../errors/index.js'
import Author from '../model/model.js'

export const createAuthorUseCase = async (body) => {
  const { name, email } = body
  if (!name || !email) {
    throw new AppError('Name and email are required!', 400)
  }

  try {
    const result = await Author.create(body)
    return result
  } catch (err) {
    const existingAuthor = await Author.findOne({
      where: { email },
    })
    if (existingAuthor) {
      throw new AppError('Email already registered.', 409)
    }
  }
}
