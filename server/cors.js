import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    return callback(null, true)
  }
})