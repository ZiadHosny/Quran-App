import { addZeros } from '../utils/addZeros.js';
import { QURAN_SUWAR } from '../utils/constants/suwar.js';
const generateUrl = ({ index, website, quranReciterInWebsite, websiteUrl }) => {
    const id = addZeros({ number: index, numOfZeros: 3 });
    const quranReciterInWebsiteWithSurahId = `${quranReciterInWebsite}/${id}.mp3`;
    if (website === 'mp3quran' && websiteUrl) {
        return `${websiteUrl}/${quranReciterInWebsiteWithSurahId}`;
    }
    else
        return 'WebsiteNotFound';
    // if (website === 'islamic')
    //     return `${ISLAMIC}.${quranReciterInWebsite}/${index}.mp3`
    // else if (website === 'islamway')
    //     return `${ISLAMWAY}/${quranReciterInWebsiteWithSurahId}`
    // else if (website === 'surahQuran')
    //     return `${SURAH_QURAN}__${quranReciterInWebsiteWithSurahId}`
};
export const generateList = ({ id, quranReciter, photo, website, quranReciterInWebsite, websiteUrl }) => {
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
            title: QURAN_SUWAR[i - 1],
            quranReciter,
            photo,
            url,
        });
    }
    return list;
};
export const generateSuwarForReciter = ({ quranReciters, website }) => {
    let quran = {};
    quranReciters.forEach(({ id, photo, quranReciter, quranReciterInWebsite, websiteUrl }) => {
        quran[id] = generateList({
            id,
            quranReciter,
            photo,
            quranReciterInWebsite,
            website,
            websiteUrl
        });
    });
    return quran;
};
