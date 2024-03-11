/* eslint-disable no-restricted-globals */
self.addEventListener('push', () => {
    self.registration.showNotification('Quran App', {
        body: "Notified by Quran!",
        icon: "images/quran128.png"
    })
})