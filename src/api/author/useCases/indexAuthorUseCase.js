import Author from '../model/model.js'

export const indexAuthorsUseCase = async () => {
  const author = await Author.findAll()
  return author
}
