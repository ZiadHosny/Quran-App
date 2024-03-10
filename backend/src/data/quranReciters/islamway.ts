import { QuranReciterInWebsite } from "../../utils/types.js";
import { generateSuwarForReciter } from "../generateList.js";

export const ISLAMWAY = 'https://download.quran.islamway.net/quran3'

export const islamway: QuranReciterInWebsite[] = [];

export const getIslamway = () => generateSuwarForReciter({
    quranReciters: islamway,
    website: "islamway"
})

