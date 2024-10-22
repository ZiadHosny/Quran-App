import { getIslamic, islamic } from "./quranReciters/islamic.js";
import { reciterAbdelrahmanMosad, getAbdelrahmanMosad, } from "./quranReciters/singles/abdelrahmanMosad.js";
import { getAhmedKhadr, reciterAhmedKhadr, } from "./quranReciters/singles/ahmedKhadr.js";
import { getMp3Quran, mp3Quran } from "./quranReciters/mp3Quran.js";
import { getIslamSobhy, reciterIslamSobhy, } from "./quranReciters/singles/islamSobhy.js";
import { getIslamway, islamway } from "./quranReciters/islamway.js";
export const getAllQuran = () => {
    return {
        ...getIslamic(),
        ...getIslamway(),
        ...getMp3Quran(),
        ...getAbdelrahmanMosad(),
        ...getAhmedKhadr(),
        ...getIslamSobhy(),
    };
};
export const allQuranReciters = () => {
    const allReciters = [
        ...islamway,
        ...islamic,
        ...mp3Quran,
        reciterAbdelrahmanMosad,
        reciterAhmedKhadr,
        reciterIslamSobhy,
    ];
    return allReciters.map(({ id, photo, quranReciter }) => ({
        id,
        quranReciter,
        photo,
    }));
};
