import { QURAN_RECITERS, QURAN_RECITERS_ISLAMWAY } from "../utils/constants.js";
import { generateList } from "./generateList.js";
export const getAllQuran = () => {
    const quran = {};
    QURAN_RECITERS.forEach(({ id, photo, quranReciter }) => {
        quran[id] = generateList({
            quranReciter,
            photo,
            quranReciterInWebsite: id,
        });
    });
    QURAN_RECITERS_ISLAMWAY.forEach(({ id, photo, quranReciter, quranReciterInWebsite }) => {
        quran[id] = generateList({
            quranReciter,
            photo,
            quranReciterInWebsite,
            website: 'islamway'
        });
    });
    return quran;
};
