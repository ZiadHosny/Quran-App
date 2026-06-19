/* eslint-disable no-restricted-globals */
self.addEventListener("push", () => {
  self.registration.showNotification("Quran App", {
    body: "Notified by Quran!",
    icon: "images/quran128.png",
  });
});

// self.addEventListener('push', event => {
//     const notificationOptions = {
//         body: "Notified by Quran!",
//         icon: "images/quran128.png",
//         tag: "quran-notification"  // Optional: Prevents stacking of similar notifications
//     };

//     event.waitUntil(
//         self.registration.showNotification('Quran App', notificationOptions)
//     );
// });
