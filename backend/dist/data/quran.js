"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allQuranReciters = exports.getAllQuran = void 0;
const islamic_1 = require("./quranReciters/islamic");
const abdelrahmanMosad_1 = require("./quranReciters/singles/abdelrahmanMosad");
const ahmedKhadr_1 = require("./quranReciters/singles/ahmedKhadr");
const mp3Quran_1 = require("./quranReciters/mp3Quran");
const islamSobhy_1 = require("./quranReciters/singles/islamSobhy");
const souilass_1 = require("./quranReciters/singles/souilass");
const getAllQuran = () => {
    return {
        ...(0, islamic_1.getIslamic)(),
        ...(0, mp3Quran_1.getMp3Quran)(),
        ...(0, abdelrahmanMosad_1.getAbdelrahmanMosad)(),
        ...(0, ahmedKhadr_1.getAhmedKhadr)(),
        ...(0, islamSobhy_1.getIslamSobhy)(),
        ...(0, souilass_1.getSouilass)(),
    };
};
exports.getAllQuran = getAllQuran;
const allQuranReciters = () => {
    const allReciters = [
        ...islamic_1.islamic,
        ...mp3Quran_1.mp3Quran,
        abdelrahmanMosad_1.reciterAbdelrahmanMosad,
        ahmedKhadr_1.reciterAhmedKhadr,
        islamSobhy_1.reciterIslamSobhy,
        souilass_1.reciterSouilass,
    ];
    return allReciters.map(({ id, photo, quranReciter, quranReciterEn }) => ({
        id,
        quranReciter,
        quranReciterEn,
        photo,
    }));
};
exports.allQuranReciters = allQuranReciters;
