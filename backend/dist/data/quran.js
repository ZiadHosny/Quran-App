import { getIslamic, islamic } from "./quranReciters/islamic.js";
import { getServer7, getServer6, getServer11, server6, server7, server11, server13, getServer13 } from "./quranReciters/mp3Quran.js";
import { getIslamway, islamway } from "./quranReciters/islamway.js";
import { getSurahQuran, surahQuran } from "./quranReciters/surahQuran.js";
import { reciterAbdelrahmanMosad, getAbdelrahmanMosad } from "./quranReciters/singles/abdelrahmanMosad.js";
import { getAhmedKhadr, reciterAhmedKhadr } from "./quranReciters/singles/ahmedKhadr.js";
export const getAllQuran = () => {
    return {
        ...getIslamic(),
        ...getIslamway(),
        ...getSurahQuran(),
        ...getServer7(),
        ...getServer6(),
        ...getServer11(),
        ...getServer13(),
        ...getAbdelrahmanMosad(),
        ...getAhmedKhadr()
    };
};
export const allQuranReciters = () => {
    const allReciters = [
        ...islamic,
        ...islamway,
        ...surahQuran,
        ...server7,
        ...server6,
        ...server11,
        ...server13,
        reciterAbdelrahmanMosad,
        reciterAhmedKhadr,
    ];
    return allReciters.map(({ id, photo, quranReciter }) => ({
        id,
        quranReciter,
        photo,
    }));
};
