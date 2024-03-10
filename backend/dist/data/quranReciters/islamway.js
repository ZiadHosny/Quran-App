import { generateSuwarForReciter } from "../generateList.js";
export const ISLAMWAY = 'https://download.quran.islamway.net/quran3';
export const islamway = [];
export const getIslamway = () => generateSuwarForReciter({
    quranReciters: islamway,
    website: "islamway"
});
