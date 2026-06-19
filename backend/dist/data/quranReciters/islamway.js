"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIslamway = exports.islamway = exports.ISLAMWAY = void 0;
const generateList_1 = require("../generateList");
exports.ISLAMWAY = 'https://download.quran.islamway.net/quran3';
exports.islamway = [
    {
        id: 'ahmad_nu_mujawwad',
        quranReciter: '(مجود) أحمد نعينع',
        photo: 'https://i.pinimg.com/564x/e7/5f/e1/e75fe1583ffecf9e2a78d0593f66cac4.jpg',
        quranReciterInWebsite: '2331/10935/48',
    },
];
const getIslamway = () => (0, generateList_1.generateSuwarForReciter)({
    quranReciters: exports.islamway,
    website: 'islamway',
});
exports.getIslamway = getIslamway;
