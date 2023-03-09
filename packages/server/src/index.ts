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
app.get(`${CONFIG.API_PATH}/universities`, (req, res) => {
  // some dummy data, replace with a database query
  res.json({
    data: [
      { id: 'TAMU', name: 'Texas A&M University, College Station' },
      { id: 'UT', name: 'University of Texas, Austin' },
    ],
  })
})

app.get(`${CONFIG.API_PATH}/:universityId/professors`, (req, res) => {
  // some dummy data, replace with a database query
  if (req.params.universityId === 'TAMU') {
    res.json({
      data: [
        { id: '0', universityId: 'TAMU', firstName: 'John', lastName: 'Doe' },
        { id: '1', universityId: 'TAMU', firstName: 'Jane', lastName: 'Doe' },
      ],
    })
  }
  else {
    res.json({
      data: [],
    })
  }
})

// listen for requests
app.listen(CONFIG.API_PORT, () => {
  console.log(`API server is now listening on ${CONFIG.API_HOST}:${CONFIG.API_PORT}`)
})

process.on('unhandledRejection', (err) => {
  console.log(err)
})
