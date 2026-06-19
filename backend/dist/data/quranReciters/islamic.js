"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIslamic = exports.islamic = exports.ISLAMIC = void 0;
const generateList_1 = require("../generateList");
exports.ISLAMIC = 'https://cdn.islamic.network/quran/audio-surah/128/ar';
exports.islamic = [];
const getIslamic = () => (0, generateList_1.generateSuwarForReciter)({
    quranReciters: exports.islamic,
    website: 'islamic',
});
exports.getIslamic = getIslamic;
