import { QURAN_RECITERS } from "../utils/constants.js";
import { Surah } from "../utils/types.js";
import { generateList } from "./generateList.js";
interface Map {
    [key: string]: Surah[]
}

export const quran: Map = {
    mahmoudkhalilAlHussary: generateList({
        ...QURAN_RECITERS.mahmoudkhalilAlHussary,
        website: 'islamway',
        quranReciterInWebsite: '316',
    }),
    misharyBinRashidAlafasy: generateList({
        ...QURAN_RECITERS.misharyBinRashidAlafasy,
        quranReciterInWebsite: 'alafasy',
    }),
    abdulbasitmujawwad: generateList({
        ...QURAN_RECITERS.abdulbasitmujawwad,
        quranReciterInWebsite: 'abdulbasitmujawwad',
    }),
    abdulbasitmurattal: generateList({
        ...QURAN_RECITERS.abdulbasitmurattal,
        quranReciterInWebsite: 'abdulbasitmurattal',
    }),
    muhammadsiddiqalminshawimujawwad: generateList({
        ...QURAN_RECITERS.muhammadsiddiqalminshawimujawwad,
        quranReciterInWebsite: 'muhammadsiddiqalminshawimujawwad',
    })
}