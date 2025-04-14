import Author from '../model/model.js'

export const indexAuthorsUseCase = async ({ query }) => {
  console.log(query)
  const author = await Author.findAll({ where: query })
  return author
}
