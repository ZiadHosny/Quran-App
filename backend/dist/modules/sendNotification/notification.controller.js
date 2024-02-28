import webpush from 'web-push';
import { getFromEnv } from "../../utils/getFromEnv.js";
export const sendNotification = (req, res) => {
    const { publicKey, privateKey } = getFromEnv();
    webpush.setVapidDetails("mailto:test@test.com", publicKey, privateKey);
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Push Test" });
    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error('err', err));
};
