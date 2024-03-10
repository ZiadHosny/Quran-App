import { getIslamic, islamic } from "./quranReciters/islamic.js";
import { reciterAbdelrahmanMosad, getAbdelrahmanMosad } from "./quranReciters/singles/abdelrahmanMosad.js";
import { getAhmedKhadr, reciterAhmedKhadr } from "./quranReciters/singles/ahmedKhadr.js";
import { getMp3Quran, mp3Quran } from "./quranReciters/mp3Quran.js";
export const getAllQuran = () => {
    return {
        ...getIslamic(),
        ...getMp3Quran(),
        ...getAbdelrahmanMosad(),
        ...getAhmedKhadr()
    };
};
export const allQuranReciters = () => {
    const allReciters = [
        ...islamic,
        ...mp3Quran,
        reciterAbdelrahmanMosad,
        reciterAhmedKhadr,
    ];
    return allReciters.map(({ id, photo, quranReciter }) => ({
        id,
        quranReciter,
        photo,
    }));
};
