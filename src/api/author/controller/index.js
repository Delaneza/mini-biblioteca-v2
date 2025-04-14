import { createAuthorUseCase } from '../useCases/createAuthorUseCase.js'
import { indexAuthorsUseCase } from '../useCases/indexAuthorUseCase.js'
import { showAuthorUseCase } from '../useCases/showAuthorUseCase.js'
import { updateAuthorUseCase } from '../useCases/updateAuthorUseCase.js'
import { deleteAuthorUseCase } from '../useCases/deleteAuthorUseCase.js'
import { middleware as body } from 'bodymen'

export const create = async ({ body }, res) => {
  const response = await createAuthorUseCase(body)
  res.status(201).json(response)
}

export const index = async ({ querymen }, res) => {
  const response = await indexAuthorsUseCase(querymen)
  res.status(200).json(response)
}

export const show = async ({ params: { id } }, res) => {
  const response = await showAuthorUseCase(id)
  res.status(200).json(response)
}

export const update = async ({ bodymen: { body }, params: { id } }, res) => {
  const response = await updateAuthorUseCase(id, body)
  res.status(200).json(response)
}

export const destroy = async ({ params: { id } }, res) => {
  const response = await deleteAuthorUseCase(id)
  res.status(204).json(response)
}
