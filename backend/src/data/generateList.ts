import { addZeros } from '../utils/addZeros.js';
import { QURAN_SUWAR } from '../utils/constants.js';
import { Surah } from '../utils/types.js'

type Website = 'islamway' | 'islamic' | 'mp3quran'

interface GenerateUrlProps {
    index: number,
    website?: Website,
    quranReciterInWebsite: string
}

const generateUrl = ({ index, website, quranReciterInWebsite }: GenerateUrlProps) => {
    const id = addZeros({ number: index, numOfZeros: 3 });
    if (website === 'islamway')
        return `https://download.quran.islamway.net/quran3/${quranReciterInWebsite}/${id}.mp3`
    else if (website === 'mp3quran')
        return `https://server11.mp3quran.net/${quranReciterInWebsite}/${id}.mp3`
    else if (website === 'islamic')
        return `https://cdn.islamic.network/quran/audio-surah/128/ar.${quranReciterInWebsite}/${index}.mp3`
    else
        return 'Not Found'
}

interface GenerateListProps {
    quranReciter: string,
    photo: string,
    website?: Website,
    quranReciterInWebsite: string
}

export const generateList = ({ quranReciter, photo, website = 'islamic', quranReciterInWebsite }: GenerateListProps) => {
    const list: Surah[] = [];

    for (let i = 1; i <= 114; i++) {
        const url = generateUrl({ index: i, website, quranReciterInWebsite })

        list.push({
            id: `${quranReciter}-${i.toString()}`,
            surahNumber: i,
            title: QURAN_SUWAR[i - 1],
            quranReciter,
            photo,
            url,
        })
    }
    return list
}