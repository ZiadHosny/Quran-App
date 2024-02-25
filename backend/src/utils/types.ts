export interface Surah {
    id: string,
    title: string,
    url: string,
    singer: string,
    photo: string,
}

export interface QuranReciter {
    id: string,
    quranReciter: string,
    photo: string,
}

export type UserProgress = {
    volume: number,
    currentMin: string,
    random: boolean,
    repeat: boolean
}

export type User = {
    userId: string
    playList: [Surah]
    currentSong: Surah
    userProgress: UserProgress
}

