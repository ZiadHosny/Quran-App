import { QURAN_SUWAR } from '../utils/constants.js';
const generateUrl = ({ index, website, quranReciterInWebsite }) => {
    const id = index.toString().padStart(3, '0');
    if (website === 'islamway')
        return `https://download.quran.islamway.net/quran3/${quranReciterInWebsite}/${id}.mp3`;
    else if (website === 'mp3quran')
        return `https://server11.mp3quran.net/${quranReciterInWebsite}/${id}.mp3`;
    else if (website === 'islamic')
        return `https://cdn.islamic.network/quran/audio-surah/128/ar.${quranReciterInWebsite}/${index}.mp3`;
    else
        return 'Not Found';
};
export const generateList = ({ quranReciter, photo, website = 'islamic', quranReciterInWebsite }) => {
    const list = [];
    for (let i = 1; i <= 114; i++) {
        const url = generateUrl({ index: i, website, quranReciterInWebsite });
        list.push({
            id: `${quranReciter}-${i.toString()}`,
            surahNumber: i,
            title: QURAN_SUWAR[i - 1],
            quranReciter,
            photo,
            url,
        });
    }
    return list;
};
