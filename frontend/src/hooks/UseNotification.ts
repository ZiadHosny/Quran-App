import { useSendNotificationMutation } from '../store/quran.store';
import { publicKey } from '../utils/envs';

export const UseNotification = () => {
    const [sendNotificationFn] = useSendNotificationMutation()

    const sendNotification = async () => {

        if ("serviceWorker" in navigator) {

            console.log("Registering service worker...");

            let register = await navigator.serviceWorker.ready;

            console.log("Service Worker Registered...");

            console.log("Registering Push...");

            const subscription = await register.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicKey
            }).catch((e) => {
                console.log(e)
            })

            console.log("Push Registered...");

            console.log("Sending Push...");

            await sendNotificationFn({ subscription })

            console.log("Push Sent...");
        }


    }



    return { sendNotification }
}