import { soraList } from "./soraList.js";
import { Surah } from '../utils/types.js'

type Website = 'islamway' | 'islamic'

interface GenerateListProps {
    quranReciter: string,
    photo: string,
    website?: Website,
    quranReciterInWebsite: string
}

interface GenerateUrlProps {
    index: number,
    website?: Website,
    quranReciterInWebsite: string
}

const generateUrl = ({ index, website, quranReciterInWebsite }: GenerateUrlProps) => {
    const id = index.toString().padStart(3, '0');
    if (website === 'islamway')
        return `https://download.quran.islamway.net/quran3/${quranReciterInWebsite}/${id}.mp3`
    else if (website === 'islamic')
        return `https://cdn.islamic.network/quran/audio-surah/128/ar.${quranReciterInWebsite}/${index}.mp3`
    else
        return 'Not Found'
}

export const generateList = ({ quranReciter, photo, website = 'islamic', quranReciterInWebsite }: GenerateListProps) => {
    const list: Surah[] = [];

    for (let i = 1; i <= 144; i++) {
        const url = generateUrl({ index: i, website, quranReciterInWebsite })

        list.push({
            id: i.toString(),
            title: soraList[i - 1],
            quranReciter,
            photo,
            url,
        })
    }
    return list
}