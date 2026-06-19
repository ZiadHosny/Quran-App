import express from 'express';
import { sendNotification } from './notification.controller';

const router = express.Router();

router.post('/subscribe', sendNotification);

export const notificationRouter = router;
