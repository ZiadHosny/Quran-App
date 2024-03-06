import { QURAN_RECITERS, QURAN_RECITERS_ISLAMWAY, QURAN_RECITERS_MP3_QURAN } from "../utils/constants.js";
import { Surah } from "../utils/types.js";
import { generateList } from "./generateList.js";
interface Map {
    [key: string]: Surah[]
}

export const getAllQuran = (): Map => {
    const quran: Map = {}
    QURAN_RECITERS.forEach(({ id, photo, quranReciter }) => {
        quran[id] = generateList({
            quranReciter,
            photo,
            quranReciterInWebsite: id,
        })
    })
    QURAN_RECITERS_ISLAMWAY.forEach(({ id, photo, quranReciter, quranReciterInWebsite }) => {
        quran[id] = generateList({
            quranReciter,
            photo,
            quranReciterInWebsite,
            website: 'islamway'
        })
    })
    QURAN_RECITERS_MP3_QURAN.forEach(({ id, photo, quranReciter, quranReciterInWebsite }) => {
        quran[id] = generateList({
            quranReciter,
            photo,
            quranReciterInWebsite,
            website: 'mp3quran'
        })
    })
    return quran
}