import { generateSuwarForReciter } from "../generateList.js";
export const SURAH_QURAN = 'https://ia800207.us.archive.org/18/items/TvQuran.com';
export const surahQuran = [];
export const getSurahQuran = () => generateSuwarForReciter({
    quranReciters: surahQuran,
    website: "surahQuran"
});
