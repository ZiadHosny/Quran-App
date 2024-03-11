import webpush from 'web-push';
import { getFromEnv } from "../../utils/getFromEnv.js";
export const sendNotification = (req, res) => {
    const { publicKey, privateKey } = getFromEnv();
    const email = 'ziadhosny007@gmail.com';
    webpush.setVapidDetails(`mailto:${email}`, publicKey, privateKey);
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Push Notification" });
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error('Error sending push notification: ', err));
};
