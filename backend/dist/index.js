import express from 'express';
import { createClient } from 'redis';
import cors from 'cors';
import { connectToMongoDb } from './database/connectToMongo.js';
import { quranRouter } from './modules/quran/quran.router.js';
import { getFromEnv } from './utils/getFromEnv.js';
import { invalidRouter } from './modules/invalidRouter.js';
import { baseRouter } from './modules/baseRouter.js';
import { globalErrorMiddleware } from './middlewares/error.js';
import { userRouter } from './modules/user/userRouter.router.js';
import { morganMiddleware } from './middlewares/morgan.js';
import { notificationRouter } from './modules/notification/notification.router.js';
const { port } = getFromEnv();
connectToMongoDb();
const app = express();
const client = createClient({
    password: 'l9YJAs87kuowVHs8NepxUsbO8Whe8Hv0',
    socket: {
        host: 'redis-11524.c14.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11524
    }
});
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);
app.use('/quran', quranRouter);
app.use('/user', userRouter);
app.use('/notification', notificationRouter);
app.use('/', baseRouter);
app.use(invalidRouter);
app.use(globalErrorMiddleware);
app.listen(port, () => console.log(`Quran Player app listening on port ${port}!`));
process.on('unhandledRejection', (err) => {
    console.log("unhandledRejection" + err);
});
