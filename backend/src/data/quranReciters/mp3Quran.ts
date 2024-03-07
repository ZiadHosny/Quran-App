import { generateSuwarForReciter } from "../generateList.js"

export const SERVER7 = 'https://server7.mp3quran.net'
export const SERVER6 = 'https://server6.mp3quran.net'
export const SERVER11 = 'https://server11.mp3quran.net'

export const server7 = [
    {
        id: 'SaadElGhamidi',
        quranReciter: 'سعد الغامدي',
        photo: 'https://ar.islamway.net/uploads/authors/saad-bin-said-alghamdy.jpg',
        quranReciterInWebsite: 's_gmd',
    },
]

export const getServer7 = () => generateSuwarForReciter({
    quranReciters: server7,
    website: "server7"
})

export const server6 = [
    {
        id: 'akdr',
        quranReciter: 'ابراهيم الأخضر',
        photo: 'https://ar.islamway.net/uploads/authors/0924.jpg',
    }
]

export const getServer6 = () => generateSuwarForReciter({
    quranReciters: server6,
    website: "server6"
})

export const server11 = [
    {
        id: 'hazza',
        quranReciter: 'هزاع البلوشي',
        photo: 'https://ar.islamway.net/uploads/authors/3964.jpg',
    }
]

export const getServer11 = () => generateSuwarForReciter({
    quranReciters: server11,
    website: "server11"
})
