"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSurahQuran = exports.surahQuran = exports.SURAH_QURAN = void 0;
const generateList_1 = require("../generateList");
exports.SURAH_QURAN = 'https://ia800207.us.archive.org/18/items/TvQuran.com';
exports.surahQuran = [];
const getSurahQuran = () => (0, generateList_1.generateSuwarForReciter)({
    quranReciters: exports.surahQuran,
    website: 'surahQuran',
});
exports.getSurahQuran = getSurahQuran;
