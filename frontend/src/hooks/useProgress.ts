/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';

import { useControllers } from './useControllers';
import { useSurah } from './useSurah';
import { useGetProgressMutation, useSaveProgressMutation } from '../store/quran.store';
import { getToken } from '../utils/getToken';
import { Result, UserProgress } from '../utils/types';
import { useNavigate } from 'react-router-dom';
import { useSurahSlider } from './useSurahSlider';
import { loadingToast, updateToastError, updateToastSuccess } from '../utils/toast';

export const useProgress = () => {
    const navigate = useNavigate();
    const {
        setIsRandom,
        setIsRepeat,
        setVolume,
        isRandom,
        isRepeat,
        volume,
    } = useControllers();

    const {
        currentSurah,
        setSurahProgress,
        setCurrentSurah,
    } = useSurah();
    const { getIdTokenClaims } = useAuth0();

    const [getProgressFn] = useGetProgressMutation()
    const [saveProgressFn] = useSaveProgressMutation()
    const { getCurrentTimeInMilliSecond } = useSurahSlider()

    const getProgress = async () => {

        const token = await getToken(getIdTokenClaims);
        if (token) {
            const id = loadingToast()
            const res = await getProgressFn({ token }) as Result
            if (res.error) {
                return updateToastError({ id, render: res.error.data.err })
            }
            const { data, message } = res.data
            const progress = data as UserProgress

            if (progress) {
                const {
                    currentMin,
                    currentSurah,
                    quranReciterId,
                    random,
                    repeat,
                    volume,
                } = progress
                if (quranReciterId) {
                    navigate(`/${quranReciterId}`)
                }
                setIsRandom(random)
                setIsRepeat(repeat)
                setVolume(volume)
                setSurahProgress(Number(currentMin) ?? 0)
                setCurrentSurah(currentSurah)
            }

            updateToastSuccess({ id, render: message })

        }
    }

    const saveProgress = async ({ audioElem, quranReciter }:
        { audioElem: HTMLAudioElement | null, quranReciter: string }) => {
        const token = await getToken(getIdTokenClaims)
        if (token && quranReciter && currentSurah.id) {
            saveProgressFn({
                body: {
                    currentSurah,
                    quranReciterId: quranReciter,
                    volume: Math.trunc(volume),
                    currentMin: getCurrentTimeInMilliSecond(audioElem),
                    random: isRandom,
                    repeat: isRepeat,
                },
                token,
            })
        }
    }

    return { getProgress, saveProgress }
}