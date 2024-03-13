import { useSurah } from './useSurah';
import { useAddSurahMostPlayedMutation, useGetMostPlayedMutation } from '../store/quran.store';
import { Result, SurahType } from '../utils/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { surahActions } from '../store/surah.store';
import { loadingToast, updateToastError, updateToastSuccess } from '../utils/toast';
import { toast } from 'react-toastify';

export const useMostPlayed = () => {

    const { mostPlayed } = useAppSelector(state => state.surah)
    const { setCurrentSurah, setSuwar } = useSurah()
    const dispatch = useAppDispatch()
    const [getMostPlayedFn] = useGetMostPlayedMutation()
    const [addSurahToMostPlayedFn] = useAddSurahMostPlayedMutation()

    // setMostPlayed
    const setMostPlayed = (mostPlayed: SurahType[]) => {
        dispatch(surahActions.setMostPlayed(mostPlayed))
    }

    // getMostPlayed
    const getMostPlayed = async () => {
        const id = loadingToast()
        const res = await getMostPlayedFn() as Result

        const { data } = res.data
        const mostPlayed = data as SurahType[]
        if (mostPlayed) {
            setMostPlayed(mostPlayed)
            setCurrentSurah(mostPlayed[0])
            setSuwar(mostPlayed)
        }
        toast.dismiss(id)
    }

    // addSurahToMostPlayed
    const addSurahToMostPlayed = async ({ surah }: { surah: SurahType }) => {
        // const id = loadingToast();
        await addSurahToMostPlayedFn({ body: surah }) as Result
        // if (res.error) {
        //     return updateToastError({ id, render: res.error.data.err })
        // }
        // return updateToastSuccess({ id, render: res.data.message })
    }

    return {
        mostPlayed,
        setMostPlayed,
        getMostPlayed,
        addSurahToMostPlayed,
    }
}