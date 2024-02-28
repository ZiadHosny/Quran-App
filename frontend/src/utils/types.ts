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
}

export type SongType = {
    index: number,
    title: string,
    singer: string,
    file_format: string,
    url: string,
    photo: string,
    id: string
}

export interface Song {
    id: string,
    title: string,
    url: string,
    singer: string,
    photo: string,
}

export type updateUserProgressData = {
    song: SongType,
    volume: number,
    random: boolean,
    repeat: boolean,
    audioElem: HTMLAudioElement | null
}

export type UserProgressData = {
    title: string,
    singer: string,
    file_format: string,
    url: string,
    photo: string,
    index: number,
    volume: number,
    current_min: string,
    random: boolean,
    repeat: boolean
}

export type SurahElemInput = {
    surahElem: RefObject<HTMLAudioElement>
}

