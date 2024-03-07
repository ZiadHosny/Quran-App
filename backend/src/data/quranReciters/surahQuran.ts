import { generateSuwarForReciter } from "../generateList.js"

export const SURAH_QURAN = 'https://ia800207.us.archive.org/18/items/TvQuran.com'

export const surahQuran = [
    {
        id: 'Jibrel',
        quranReciter: 'محمد جبريل',
        photo: 'https://i.pinimg.com/564x/fa/8f/f8/fa8ff84527ff6c1611e304f94b1bf96d.jpg',
    }
]

export const getSurahQuran = () => generateSuwarForReciter({
    quranReciters: surahQuran,
    website: "surahQuran"
})
