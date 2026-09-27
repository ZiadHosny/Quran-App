"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAhmadNuainaaMujawwad = exports.reciterAhmadNuainaaMujawwad = void 0;
const generateList_1 = require("../../generateList");
const url = `https://archive.org/download/Ahmed_Nuaina-Mujawwad2_el-moslem.com`;
const arrOfSuwar = Array.from({ length: 114 }, (_, i) => i + 1);
exports.reciterAhmadNuainaaMujawwad = {
    id: 'ahmad_nu_mujawwad',
    quranReciter: '(مجود) أحمد نعينع',
    quranReciterEn: "Ahmad Na'inaa (Mujawwad)",
    photo: 'https://i.pinimg.com/564x/e7/5f/e1/e75fe1583ffecf9e2a78d0593f66cac4.jpg',
};
const getAhmadNuainaaMujawwad = () => (0, generateList_1.generateSingleReciter)({
    arrOfSuwar,
    reciter: exports.reciterAhmadNuainaaMujawwad,
    url,
});
exports.getAhmadNuainaaMujawwad = getAhmadNuainaaMujawwad;
