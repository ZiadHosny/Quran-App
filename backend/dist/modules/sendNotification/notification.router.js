import express from "express";
import { sendNotification } from "./notification.controller.js";
const notificationRouter = express.Router();
notificationRouter.post('/subscribe', sendNotification);
export default notificationRouter;
