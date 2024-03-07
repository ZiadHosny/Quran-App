import { getIslamic, islamic } from "./quranReciters/islamic.js";
import { getServer7, getServer6, getServer11, server6, server7, server11 } from "./quranReciters/mp3Quran.js";
import { getIslamway, islamway } from "./quranReciters/islamway.js";
import { SuwarMap } from "../utils/types.js";
import { getSurahQuran, surahQuran } from "./quranReciters/surahQuran.js";
import { reciterAbdelrahmanMosad, getAbdelrahmanMosad } from "./quranReciters/abdelrahmanMosad.js";

export const getAllQuran = (): SuwarMap => {
    return {
        ...getIslamic(),
        ...getIslamway(),
        ...getSurahQuran(),
        ...getServer7(),
        ...getServer6(),
        ...getServer11(),
        ...getAbdelrahmanMosad(),
    }

}

export const allQuranReciters = () => {
    const allReciters = [
        ...islamic,
        ...islamway,
        ...surahQuran,
        ...server7,
        ...server6,
        ...server11,
        reciterAbdelrahmanMosad,
    ]

    return allReciters.map(({ id, photo, quranReciter }) => ({
        id,
        quranReciter,
        photo,
    }))
}