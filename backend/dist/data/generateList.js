"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSingleReciter = exports.generateSuwarForReciter = exports.generateList = void 0;
const addZeros_1 = require("../utils/addZeros");
const suwar_1 = require("./suwar");
const generateUrl = ({ index, website, quranReciterInWebsite, websiteUrl, }) => {
    const id = (0, addZeros_1.addZeros)({ number: index, numOfZeros: 3 });
    const quranReciterInWebsiteWithSurahId = `${quranReciterInWebsite}/${id}.mp3`;
    if (website === 'mp3quran' && websiteUrl) {
        return `${websiteUrl}/${quranReciterInWebsiteWithSurahId}`;
    }
    else
        return 'WebsiteNotFound';
};
const generateList = ({ id, quranReciter, quranReciterEn, photo, website, quranReciterInWebsite, websiteUrl, }) => {
    const list = [];
    for (let i = 1; i <= 114; i++) {
        const url = generateUrl({
            index: i,
            website,
            quranReciterInWebsite: quranReciterInWebsite ?? id,
            websiteUrl,
        });
        list.push({
            id: `${id}-${i.toString()}`,
            surahNumber: i,
            title: suwar_1.QURAN_SUWAR[i - 1].ar,
            titleEn: suwar_1.QURAN_SUWAR[i - 1].en,
            quranReciter,
            quranReciterEn,
            photo,
            url,
        });
    }
    return list;
};
exports.generateList = generateList;
const generateSuwarForReciter = ({ quranReciters, website, }) => {
    let quran = {};
    quranReciters.forEach(({ id, photo, quranReciter, quranReciterEn, quranReciterInWebsite, websiteUrl }) => {
        quran[id] = (0, exports.generateList)({
            id,
            quranReciter,
            quranReciterEn,
            photo,
            quranReciterInWebsite,
            website,
            websiteUrl,
        });
    });
    return quran;
};
exports.generateSuwarForReciter = generateSuwarForReciter;
const generateSingleReciter = ({ arrOfSuwar, reciter, url, }) => {
    const reciterSuwar = [];
    const { photo, quranReciter, quranReciterEn, id: reciterId } = reciter;
    arrOfSuwar.forEach((surahNumber) => {
        const surahIdWithZero = (0, addZeros_1.addZeros)({ number: surahNumber, numOfZeros: 3 });
        reciterSuwar.push({
            id: `${reciterId}-${surahNumber}`,
            title: suwar_1.QURAN_SUWAR[surahNumber - 1].ar,
            titleEn: suwar_1.QURAN_SUWAR[surahNumber - 1].en,
            photo,
            quranReciter,
            quranReciterEn,
            surahNumber,
            url: `${url}/${surahIdWithZero}.mp3`,
        });
    });
    return {
        [reciterId]: reciterSuwar,
    };
};
exports.generateSingleReciter = generateSingleReciter;
