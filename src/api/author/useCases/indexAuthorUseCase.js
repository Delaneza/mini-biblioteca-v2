import Author from '../model/model.js'

export const indexAuthorsUseCase = async ({ query }) => {
  const author = await Author.findAll({ where: query })
  return author
}
