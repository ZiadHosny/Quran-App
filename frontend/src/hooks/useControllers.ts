import { useAppDispatch, useAppSelector } from "../store/hooks";
import { controllersActions } from "../store/controllers.store";

export type RepeatSection = {
    isRepeat?: boolean,
    start?: number,
    end?: number,
    times?: number
}

export const useControllers = () => {
    const { isRepeat, isRandom, isPlaying, volume, repeatSection } = useAppSelector(state => state.controllers)
    const dispatch = useAppDispatch()

    // isPlaying
    const setIsPlaying = (value: boolean) => {
        dispatch(controllersActions.setIsPlaying(value))
    }
    const handleIsPlaying = () => {
        dispatch(controllersActions.setIsPlaying(!isPlaying))
    }
    // isRepeat
    const setIsRepeat = (value: boolean) => {
        dispatch(controllersActions.setIsRepeat(value))
    }
    const handleIsRepeat = () => {
        setIsRepeat(!isRepeat)
    }
    // isRandom
    const setIsRandom = (value: boolean) => {
        dispatch(controllersActions.setIsRandom(value))
    }
    const handleIsRandom = () => {
        setIsRandom(!isRandom)
    }
    // volume
    const setVolume = (value: number) => {
        dispatch(controllersActions.setVolume(value))
    }
    const onChangeVolume = (audioElem: HTMLAudioElement | null, value: number = 0) => {
        if (audioElem) {
            audioElem.volume = (value / 100)
            setVolume(value)
        }
    }
    // volume
    const setRepeatSection = (value: RepeatSection) => {
        dispatch(controllersActions.setRepeatSection(value))
    }

    return {
        isPlaying,
        setIsPlaying,
        handleIsPlaying,
        isRepeat,
        setIsRepeat,
        handleIsRepeat,
        isRandom,
        setIsRandom,
        handleIsRandom,
        volume,
        setVolume,
        onChangeVolume,
        repeatSection,
        setRepeatSection
    }
}