import { convertSecondsToTime } from "../utils/convertSecondsToTime";
import { useSurah } from "./useSurah";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { surahActions } from "../store/surah.store";

export const useSurahSlider = () => {
    const {
        setSurahDuration,
        surahProgress,
        setSurahProgress,
    } = useSurah()
    const { surahSlider } = useAppSelector(state => state.surah)
    const dispatch = useDispatch()

    // setSurahSlider
    const setSurahSlider = (value: number) => {
        dispatch(surahActions.setSurahSlider(value))
    }
    // onChangeSurahSlider
    const onChangeSurahSlider = (audioElem: HTMLAudioElement | null, value: number = 0) => {
        const duration = audioElem?.duration
        if (audioElem && duration) {
            audioElem.currentTime = (duration / 100) * value
        }
        setSurahSlider(value)
    }
    // setSurahProgressFromLoggedInUser
    const setSurahProgressFromLoggedInUser = (audioElem: HTMLAudioElement | null, duration: number) => {
        if (audioElem && surahProgress) {

            audioElem.currentTime = surahProgress

            updateSurahSlider(surahProgress, duration)

            setSurahProgress(0)
        }
    }
    // updateSurahSlider
    const updateSurahSlider = (currentTime: number, duration: number) => {
        const percent = ((currentTime / duration) * 100).toFixed(2)

        if (isNaN(+percent)) {
            setSurahSlider(0)
        } else {
            setSurahSlider(+percent)
        }
    }
    // getCurrentTime
    const getCurrentTime = (audioElem: HTMLAudioElement | null): string => {
        return convertSecondsToTime(audioElem?.currentTime ?? 0)
    }
    // getCurrentTimeInMilliSecond
    const getCurrentTimeInMilliSecond = (audioElem: HTMLAudioElement | null): string => {
        return audioElem?.currentTime.toString() ?? '0'
    }
    // setSurahDurationFn
    const setSurahDurationFn = (duration: number) => {
        const durationTime = convertSecondsToTime(duration)
        setSurahDuration(durationTime)
    }

    return {
        surahSlider,
        setSurahSlider,
        onChangeSurahSlider,
        setSurahProgressFromLoggedInUser,
        updateSurahSlider,
        getCurrentTime,
        getCurrentTimeInMilliSecond,
        setSurahDurationFn
    }
}