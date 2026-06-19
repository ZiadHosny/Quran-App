"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAhmedKhadr = exports.reciterAhmedKhadr = void 0;
const generateList_1 = require("../../generateList");
const url = 'https://ia801504.us.archive.org/11/items/012_20221105_202211';
const arrOfSuwar = [
    12, 15, 18, 19, 20, 21, 22, 25, 27, 30, 31, 36, 43, 44, 46, 47, 48, 49, 55,
    56, 61, 67, 70, 71, 72, 75, 78, 79, 81, 83, 86, 88, 89, 90, 91, 97, 110,
];
exports.reciterAhmedKhadr = {
    id: 'ahmedKhadr',
    quranReciter: 'أحمد خضر',
    photo: 'https://i.pinimg.com/564x/74/9c/dd/749cdd141bfa7444e7d6c5644ce3c62c.jpg',
};
const getAhmedKhadr = () => (0, generateList_1.generateSingleReciter)({
    arrOfSuwar,
    reciter: exports.reciterAhmedKhadr,
    url,
});
exports.getAhmedKhadr = getAhmedKhadr;
