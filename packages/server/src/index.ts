/* eslint-disable import/order */
import { CONFIG } from './config.js'

import express from 'express'
import cors from 'cors'

// set up express app
const app = express()
app.use(cors({
  origin: `${CONFIG.CLIENT_HOST}`,
}))

// set up routes
app.get('/v1/universities', (req, res) => {
  // some dummy data, replace with a database query
  res.json({
    data: [
      { value: 'TAMU', label: 'Texas A&M University, College Station' },
      { value: 'UT', label: 'University of Texas, Austin' },
    ],
  })
})

// listen for requests
app.listen(CONFIG.API_PORT, () => {
  console.log(`API server is now listening on ${CONFIG.API_HOST}:${CONFIG.API_PORT}`)
})

process.on('unhandledRejection', (err) => {
  console.log(err)
})
