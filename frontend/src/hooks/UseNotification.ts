import { useAsyncFn } from 'react-use'
import { backendUrl, publicKey } from '../utils/envs';

export const UseNotification = () => {

    const subscribe = useAsyncFn(async (): Promise<void> => {

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

            await fetch(`${backendUrl}/notification/subscribe`, {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                    "content-type": "application/json"
                }
            });

            console.log("Push Sent...");
        }

    }, [backendUrl])

    return subscribe;
}