import express, { json } from 'express'
import { readJSON } from '../utils.js'
import { corsMiddleware } from './cors.js'

const list = readJSON('./server/list.json')

const app = express()

app.use(json())
app.use(corsMiddleware())

app.disable('x-powered-by')

app.post('/', (req, res) => {
  list.push(req.body)
  console.log(list)
  res.json(req.body)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
