import { QURAN_RECITERS } from "../utils/constants.js"
import { QuranReciter } from "../utils/types.js"

export const quranReciters: QuranReciter[] = [
    {
        id: 'mahmoudkhalilAlHussary',
        ...QURAN_RECITERS.mahmoudkhalilAlHussary
    },
    {
        id: 'misharyBinRashidAlafasy',
        ...QURAN_RECITERS.misharyBinRashidAlafasy
    },
    {
        id: 'abdulbasitmujawwad',
        ...QURAN_RECITERS.abdulbasitmujawwad
    },
    {
        id: 'abdulbasitmurattal',
        ...QURAN_RECITERS.abdulbasitmurattal
    },
    {
        id: 'muhammadsiddiqalminshawimujawwad',
        ...QURAN_RECITERS.muhammadsiddiqalminshawimujawwad
    }
]