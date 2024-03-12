import { addZeros } from '../utils/addZeros.js';
import { QURAN_SUWAR } from '../utils/constants/suwar.js';
import { QuranReciterInWebsite, QuranRecitersWithWebsite, Surah, SuwarMap, Website } from '../utils/types.js'

interface GenerateUrlProps {
    index: number,
    website?: Website,
    quranReciterInWebsite: string
    websiteUrl?: string
}
const generateUrl = ({ index, website, quranReciterInWebsite, websiteUrl }: GenerateUrlProps) => {
    const id = addZeros({ number: index, numOfZeros: 3 });

    const quranReciterInWebsiteWithSurahId = `${quranReciterInWebsite}/${id}.mp3`
    if (website === 'mp3quran' && websiteUrl) {
        return `${websiteUrl}/${quranReciterInWebsiteWithSurahId}`
    }
    else
        return 'WebsiteNotFound'
    // if (website === 'islamic')
    //     return `${ISLAMIC}.${quranReciterInWebsite}/${index}.mp3`
    // else if (website === 'islamway')
    //     return `${ISLAMWAY}/${quranReciterInWebsiteWithSurahId}`
    // else if (website === 'surahQuran')
    //     return `${SURAH_QURAN}__${quranReciterInWebsiteWithSurahId}`
}
interface GenerateListProps extends QuranReciterInWebsite {
    website: Website,
}
export const generateList = ({ id, quranReciter, photo, website, quranReciterInWebsite, websiteUrl }:
    GenerateListProps) => {
    const list: Surah[] = [];

    for (let i = 1; i <= 114; i++) {
        const url = generateUrl({
            index: i,
            website,
            quranReciterInWebsite: quranReciterInWebsite ?? id,
            websiteUrl,
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
    quranReciters.forEach(({ id, photo, quranReciter, quranReciterInWebsite, websiteUrl }) => {
        quran[id] = generateList({
            id,
            quranReciter,
            photo,
            quranReciterInWebsite,
            website,
            websiteUrl
        })
    })

    return quran
}