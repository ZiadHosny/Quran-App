"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSouilass = exports.reciterSouilass = void 0;
const generateList_1 = require("../../generateList");
const url = `https://server16.mp3quran.net/souilass/Rewayat-Warsh-A-n-Nafi`;
const arrOfSuwar = [
    1, 18, 19, 25, 50, 51, 56, 57, 67, 73, 91, 97, 112,
];
exports.reciterSouilass = {
    id: 'souilass',
    quranReciter: 'يونس اسويلص',
    photo: 'https://i.pinimg.com/564x/dd/60/ca/dd60ca72855cee2c61b142d5f522542b.jpg',
};
const getSouilass = () => (0, generateList_1.generateSingleReciter)({
    arrOfSuwar,
    reciter: exports.reciterSouilass,
    url,
});
exports.getSouilass = getSouilass;
