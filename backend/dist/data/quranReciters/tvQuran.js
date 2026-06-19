"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTvQuran = exports.tvQuran = exports.TV_QURAN = void 0;
const generateList_1 = require("../generateList");
exports.TV_QURAN = 'https://download.tvquran.com/download/recitations';
exports.tvQuran = [];
const getTvQuran = () => (0, generateList_1.generateSuwarForReciter)({
    quranReciters: exports.tvQuran,
    website: 'tvQuran',
});
exports.getTvQuran = getTvQuran;
