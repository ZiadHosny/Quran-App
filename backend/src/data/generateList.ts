import { addZeros } from '../utils/addZeros.js';
import { QURAN_SUWAR } from '../utils/constants/suwar.js';
import { QuranReciterInWebsite, QuranRecitersWithWebsite, Surah, SuwarMap, Website } from '../utils/types.js'
import { ISLAMIC } from './quranReciters/islamic.js';
import { ISLAMWAY } from './quranReciters/islamway.js';
import { SERVER11, SERVER13, SERVER6, SERVER7, server11 } from './quranReciters/mp3Quran.js';
import { SURAH_QURAN } from './quranReciters/surahQuran.js';

interface GenerateUrlProps {
    index: number,
    website?: Website,
    quranReciterInWebsite: string
}
const generateUrl = ({ index, website, quranReciterInWebsite }: GenerateUrlProps) => {
    const id = addZeros({ number: index, numOfZeros: 3 });

    const quranReciterInWebsiteWithSurahId = `${quranReciterInWebsite}/${id}.mp3`

    if (website === 'islamic')
        return `${ISLAMIC}.${quranReciterInWebsite}/${index}.mp3`
    else if (website === 'islamway')
        return `${ISLAMWAY}/${quranReciterInWebsiteWithSurahId}`
    else if (website === 'server7')
        return `${SERVER7}/${quranReciterInWebsiteWithSurahId}`
    else if (website === 'server6')
        return `${SERVER6}/${quranReciterInWebsiteWithSurahId}`
    else if (website === 'server11')
        return `${SERVER11}/${quranReciterInWebsiteWithSurahId}`
    else if (website === 'server13')
        return `${SERVER13}/${quranReciterInWebsiteWithSurahId}`
    else if (website === 'surahQuran')
        return `${SURAH_QURAN}__${quranReciterInWebsiteWithSurahId}`
    else
        return 'WebsiteNotFound'
}
interface GenerateListProps extends QuranReciterInWebsite {
    website: Website,
}
export const generateList = ({ id, quranReciter, photo, website, quranReciterInWebsite, }:
    GenerateListProps) => {
    const list: Surah[] = [];

    for (let i = 1; i <= 114; i++) {
        const url = generateUrl({
            index: i,
            website,
            quranReciterInWebsite: quranReciterInWebsite ?? id
        })

        list.push({
            id: `${id}-${i.toString()}`,
            surahNumber: i,
            title: QURAN_SUWAR[i - 1],
            quranReciter,
            photo,
            url,
        })
    }
    return list
}

export const generateSuwarForReciter = (
    { quranReciters, website }: QuranRecitersWithWebsite): SuwarMap => {
    let quran: SuwarMap = {}

    quranReciters.forEach(({ id, photo, quranReciter, quranReciterInWebsite }) => {
        quran[id] = generateList({
            id,
            quranReciter,
            photo,
            quranReciterInWebsite,
            website,
        })
    })

    return quran
}