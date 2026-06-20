"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbdelrahmanMosad = exports.reciterAbdelrahmanMosad = void 0;
const generateList_1 = require("../../generateList");
const url = 'https://download.tvquran.com/download/recitations/372/303';
const arrOfSuwar = [32, 73, 78, 87, 88, 100, 107];
exports.reciterAbdelrahmanMosad = {
    id: 'abdelrahmanMosad',
    quranReciter: 'عبد الرحمن مسعد',
    quranReciterEn: 'Abdul Rahman Masad',
    photo: 'https://i.pinimg.com/564x/bc/8f/2b/bc8f2b7a713d2021b9258475d67b588a.jpg',
};
const getAbdelrahmanMosad = () => (0, generateList_1.generateSingleReciter)({
    arrOfSuwar,
    reciter: exports.reciterAbdelrahmanMosad,
    url,
});
exports.getAbdelrahmanMosad = getAbdelrahmanMosad;
