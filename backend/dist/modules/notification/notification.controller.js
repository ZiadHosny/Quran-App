"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = void 0;
const web_push_1 = __importDefault(require("web-push"));
const getFromEnv_1 = require("../../utils/getFromEnv");
const sendNotification = (req, res) => {
    console.log('email, publicKey, privateKey');
    const { publicKey, privateKey } = (0, getFromEnv_1.getFromEnv)();
    const email = 'ziadhosny007@gmail.com';
    web_push_1.default.setVapidDetails(`mailto:${email}`, publicKey, privateKey);
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: 'Push Notification' });
    web_push_1.default
        .sendNotification(subscription, payload)
        .catch((err) => console.error('Error sending push notification: ', err));
};
exports.sendNotification = sendNotification;
