"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIslamSobhy = exports.reciterIslamSobhy = void 0;
const generateList_1 = require("../../generateList");
const url = `https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem`;
const arrOfSuwar = [
    13, 17, 18, 26, 31, 32, 41, 42, 44, 50, 53, 54, 55, 56, 59, 64, 66, 67, 70,
    72, 76, 79, 85, 88,
];
exports.reciterIslamSobhy = {
    id: 'islamSobhy',
    quranReciter: 'إسلام صبحي',
    quranReciterEn: 'Islam Sobhi',
    photo: 'https://tvquran.com/uploads/authors/images/%D8%A7%D8%B3%D9%84%D8%A7%D9%85%20%D8%B5%D8%A8%D8%AD%D9%8A.jpg',
};
const getIslamSobhy = () => (0, generateList_1.generateSingleReciter)({
    arrOfSuwar,
    reciter: exports.reciterIslamSobhy,
    url,
});
exports.getIslamSobhy = getIslamSobhy;
