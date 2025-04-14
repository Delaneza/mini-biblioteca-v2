import { createBookUseCase } from '../useCases/createBookUseCase.js'
import { indexBookUseCase } from '../useCases/indexBookUseCase.js'
import { showBookUseCase } from '../useCases/showBookUseCase.js'
import { updateBookUseCase } from '../useCases/updateBookUseCase.js'
import { deleteBookUseCase } from '../useCases/deleteBookUseCase.js'

export const create = async ({ body }, res) => {
  const response = await createBookUseCase(body)
  res.status(201).json(response)
}

export const index = async ({ querymen }, res) => {
  const response = await indexBookUseCase(querymen)
  res.status(200).json(response)
}

export const show = async ({ params: { id } }, res) => {
  const response = await showBookUseCase(id)
  res.status(200).json(response)
}

export const update = async ({ params: { id }, bodymen: { body } }, res) => {
  const response = await updateBookUseCase(id, body)
  res.status(200).json(response)
}

export const destroy = async ({ params: { id } }, res) => {
  const response = await deleteBookUseCase(id)
  res.status(204).json(response)
}
