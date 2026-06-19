import express from 'express';
import cors from 'cors';
import { connectToMongoDb } from './database/connectToMongo';
import { quranRouter } from './modules/quran/quran.router';
import { getFromEnv } from './utils/getFromEnv';
import { invalidRouter } from './modules/invalidRouter';
import { baseRouter } from './modules/baseRouter';
import { globalErrorMiddleware } from './middlewares/error';
import { userRouter } from './modules/user/userRouter.router';
import { morganMiddleware } from './middlewares/morgan';
import { notificationRouter } from './modules/notification/notification.router';

const { port } = getFromEnv();

connectToMongoDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

app.use('/quran', quranRouter);
app.use('/user', userRouter);
app.use('/notification', notificationRouter);
app.use('/', baseRouter);
app.use(invalidRouter);
app.use(globalErrorMiddleware);

app.listen(port, () =>
  console.log(`Quran Player app listening on port ${port}!`),
);

process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection' + err);
});
