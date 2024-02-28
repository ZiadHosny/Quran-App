import { Request } from 'express'
import { Document } from 'mongoose'
import { UserModel } from '../models/user.model.js'

export interface AuthRequest extends Request {
    userId: any
    user: any
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
    currentMin: string,
    volume: number,
    random: boolean,
    repeat: boolean
}

export type User = {
    userId: string
    playlist: [Surah]
    currentSong: Surah
    userProgress: UserProgress
}

