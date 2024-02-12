import express from 'express'
const app = express()
const port = 3000

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
export const readJson = (path) => require(path)
const movies = readJson('./data.json')

app.disable('x-powered-by')

app.get('/products', (req, res) => {
  res.send(movies)
})

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id)
  const movie = movies.find((movie) => movie.id === id)
  res.send(movie)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
