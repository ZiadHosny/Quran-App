import { Request } from 'express'
import { Types } from 'mongoose'

export interface AuthRequest extends Request {
    user: User & { _id: Types.ObjectId },
}

export interface Surah {
    id: string,
    surahNumber: number,
    title: string,
    url: string,
    quranReciter: string,
    photo: string,
}

export type User = {
    userId: string,
    name: string,
    email: string,
    picture: string,
    locale: string,
    playlist: [Surah]
    userProgress: UserProgress
}

export type UserProgress = {
    currentSurah: Surah
    currentMin: string,
    quranReciterId: string,
    volume: number,
    random: boolean,
    repeat: boolean
}

export type View = {
    userAgent: string,
    userId?: string
    name?: string,
    email?: string
    deviceType?: string,
    browserName?: string,
}

// QuranReciter
export interface QuranReciter {
    id: string,
    quranReciter: string,
    photo: string,
}

export interface QuranReciterInWebsite extends QuranReciter {
    quranReciterInWebsite?: string,
    websiteUrl?: string,
}

export interface QuranRecitersWithWebsite {
    quranReciters: QuranReciterInWebsite[],
    website: Website,
}

export type Website =
    'islamway' |
    'islamic' |
    'mp3quran' |
    'surahQuran' |
    'tvQuran' |
    'server6' |
    'server7' |
    'server8' |
    'server10' |
    'server11' |
    'server13' |
    'server14'

export interface SuwarMap {
    [key: string]: Surah[]
}
