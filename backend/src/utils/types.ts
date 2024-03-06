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

export interface QuranReciter {
    id: string,
    quranReciter: string,
    photo: string,
}

export type UserProgress = {
    currentSurah: Surah
    currentMin: string,
    quranReciterId: string,
    volume: number,
    random: boolean,
    repeat: boolean
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

