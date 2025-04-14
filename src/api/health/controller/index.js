export const health = (_, res) => {
  res.status(200).json({ message: 'Server healthy' })
}
