// ENV variables
require('dotenv').config()

import express from 'express'
import config from 'config'
import router from './router'
import db from '../config/db'
import Logger from '../config/logger'
import morganMiddleware from './middleware/morganMiddleware'

const app = express()

// JSON Middleware
app.use(express.json())

// app port
const port = config.get<number>('port')

app.use(morganMiddleware)
// Routes
app.use('/api', router)


app.listen(port, async () => {
    await db()
    Logger.info(`Backend está rodando na porta: ${port}`)
})