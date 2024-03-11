import { useAppDispatch, useAppSelector } from "../store/hooks"
import { surahActions } from "../store/surah.store"
import { QuranReciterType, SurahType } from "../utils/types"

export const useSurah = () => {
    const {
        surahDuration,
        surahProgress,
        currentSurah,
        suwar,
        quranReciters,
        searchedQuranReciters,
        searchedSuwar,
        searchTerm,
    } = useAppSelector(state => state.surah)

    const { isPlaying, isRepeat, isRandom } = useAppSelector(state => state.controllers)

    const dispatch = useAppDispatch()

    // set searched Term
    const setSearchTerm = (searchTerm: string) => {
        dispatch(surahActions.setSearchTerm(searchTerm))
    }
    // setQuranReciters
    const setQuranReciters = (quranReciters: QuranReciterType[]) => {
        dispatch(surahActions.setQuranReciters(quranReciters))
    }
    // setCurrentSurah
    const setCurrentSurah = (surah: SurahType) => {
        dispatch(surahActions.setCurrentSurah(surah))
    }
    // setSuwar
    const setSuwar = (suwar: SurahType[]) => {
        dispatch(surahActions.setSuwar(suwar))
    }
    // surahDuration
    const setSurahDuration = (value: string) => {
        dispatch(surahActions.setSurahDuration(value))
    }
    // surahProgress
    const setSurahProgress = (value: number) => {
        dispatch(surahActions.setSurahProgress(value))
    }
    // handlePlayAndPause
    const handlePlayAndPause = async (audioElem: HTMLAudioElement | null) => {
        if (audioElem) {
            if (isPlaying) {
                try {
                    await audioElem.play()
                } catch (e) {
                    console.log(e)
                }
            }
            else {
                audioElem.pause()
            }
        }
    }
    // resizeSingerImage
    const resizeSingerImage = (imgRef: HTMLInputElement | null) => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const newCdWidth = 200 - scrollTop;
        if (imgRef) {
            imgRef.style.width = newCdWidth > 0 ? newCdWidth + 'px' : '0'
            imgRef.style.opacity = (newCdWidth / 200).toString()
        }
    };
    // nextSurah
    const nextSurah = () => {
        if (getSurahIndexBySurahId(currentSurah.id) >= suwar.length - 1) {
            return setCurrentSurah(suwar[0]);
        }
        else {
            const surah = suwar[getSurahIndexBySurahId(currentSurah.id) + 1]
            return setCurrentSurah(surah)
        }
    }
    // handleNextSurah
    const handleNextSurah = (audioElem: HTMLAudioElement | null) => {
        if (isRandom) {
            changeToRandomSurah()
        } else {
            nextSurah()
        }
        handlePlayAndPause(audioElem)
    }
    // prevSurah
    const prevSurah = () => {
        if (getSurahIndexBySurahId(currentSurah.id) < 1) {
            const surah = suwar[suwar.length - 1]
            return setCurrentSurah(surah)
        }
        else {
            const surah = suwar[getSurahIndexBySurahId(currentSurah.id) - 1]
            return setCurrentSurah(surah)
        }
    }
    // changeToRandomSurah
    const changeToRandomSurah = () => {
        let randomId
        do {
            if (suwar.length === 1) return
            randomId = Math.floor(Math.random() * suwar.length)
        }
        while (randomId === getSurahIndexBySurahId(currentSurah.id));
        setCurrentSurah(suwar[randomId])
    }
    // onSurahEnded
    const onSurahEnded = (audioElem: HTMLAudioElement | null) => {
        if (isRepeat && audioElem) {
            audioElem.currentTime = 0
            audioElem.play()
        } else {
            handleNextSurah(audioElem)
        }
    }
    // getSurahBySurahNumber
    // const getSurahBySurahNumber = (surahNumber: number): SurahType => {
    //     return suwar.find((surah: SurahType) => surah.surahNumber === surahNumber)!
    // }
    // getSurahIndexBySurahId
    const getSurahIndexBySurahId = (surahId: string): number => {
        return suwar.findIndex((surah: SurahType) => surah.id === surahId)!
    }
    // setSearchedQuranReciters
    const setSearchedQuranReciters = (quranReciters: QuranReciterType[]) => {
        dispatch(surahActions.setSearchedQuranReciters(quranReciters))
    }
    // setSearchedSuwar
    const setSearchedSuwar = (suwar: SurahType[]) => {
        dispatch(surahActions.setSearchedSuwar(suwar))
    }
    // isCurrentSurah
    const isCurrentSurah = (id: string) => {
        return currentSurah.id === id
    }
    // quranRecitersFilter
    const quranRecitersFilter = searchTerm ?
        searchedQuranReciters : quranReciters
    // quranSuwarFilter
    const quranSuwarFilter = searchTerm ?
        searchedSuwar : suwar

    return {
        currentSurah,
        setCurrentSurah,
        suwar,
        setSuwar,
        surahDuration,
        setSurahDuration,
        surahProgress,
        setSurahProgress,
        handlePlayAndPause,
        isCurrentSurah,
        resizeSingerImage,
        handleNextSurah,
        prevSurah,
        onSurahEnded,
        quranReciters,
        setQuranReciters,
        setSearchedQuranReciters,
        setSearchedSuwar,
        searchedQuranReciters,
        searchedSuwar,
        searchTerm,
        setSearchTerm,
        quranRecitersFilter,
        quranSuwarFilter
    }
}