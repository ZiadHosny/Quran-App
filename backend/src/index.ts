import express from 'express';
import cors from 'cors';
import { connectToMongoDb } from './database/connectToMongo.js';
import { quranRouter } from './modules/quran/quran.router.js';
import { getFromEnv } from './utils/getFromEnv.js';
import { invalidRouter } from './modules/invalidRouter.js';
import { baseRouter } from './modules/baseRouter.js';
import { globalErrorMiddleware } from './middlewares/error.js'

const { port } = getFromEnv()

connectToMongoDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/quran', quranRouter)
// app.use('/user', userRouter)
app.use('/', baseRouter)
app.use(invalidRouter)
app.use(globalErrorMiddleware)

app.listen(port, () => console.log(`Quran Player app listening on port ${port}!`))

process.on('unhandledRejection', (err) => {
    console.log("unhandledRejection" + err)
})