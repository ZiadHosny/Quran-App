import { QURAN_RECITERS, QURAN_RECITERS_ISLAMWAY } from "../utils/constants.js";
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
    return quran
}