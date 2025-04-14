/**
 * Represents an error that occurred in the application.
 * @class
 */
export default class AppError {
  /**
   * Creates an instance of AppError.
   * @param {string} message - The error message.
   * @param {number} [statusCode=400] - The HTTP status code associated with the error.
   * @param {any} [details=null] - Additional details related to the error.
   */
  constructor(message, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}

export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message })
  } else {
    console.error('ERRO INESPERADO!', err)
    res.status(500).json({ message: 'Error: Internal Server Error' })
  }
}
