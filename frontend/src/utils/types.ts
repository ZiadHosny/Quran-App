import { RefObject } from "react"

export type QuranReciterType = {
    id: string,
    quranReciter: string,
    photo: string,
}

export interface SurahType {
    id: string,
    surahNumber: number,
    title: string,
    url: string,
    quranReciter: string,
    photo: string,
    surahPlayedCount?: number
}

export type UserProgress = {
    currentSurah: SurahType
    currentMin: string,
    quranReciterId: string,
    volume: number,
    random: boolean,
    repeat: boolean
}

export type SurahElemInput = {
    surahElem: RefObject<HTMLAudioElement>
}

export type Result = {
    error: { data: { err: string } },
    data: { data: any, message: string }
}
