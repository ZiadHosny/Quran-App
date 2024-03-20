import { useSurah } from './useSurah';
import { useAddSurahMostPlayedMutation, useGetMostPlayedMutation } from '../store/quran.store';
import { Result, SurahType } from '../utils/types';
import { getMostPlayedSuccess } from '../utils/strings'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { surahActions } from '../store/surah.store';
import { useLoading } from './useLoading';

export const useMostPlayed = () => {

    const { mostPlayed } = useAppSelector(state => state.surah)
    const { setLoading } = useLoading()
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
        const id = setLoading({ msg: getMostPlayedSuccess })
        const res = await getMostPlayedFn() as Result

        const { data } = res.data
        const mostPlayed = data as SurahType[]
        if (mostPlayed) {
            setMostPlayed(mostPlayed)
            setCurrentSurah(mostPlayed[0])
            setSuwar(mostPlayed)
        }
        setLoading({ id })
    }

    // addSurahToMostPlayed
    const addSurahToMostPlayed = async ({ surah }: { surah: SurahType }) => {
        try {
            await addSurahToMostPlayedFn({ body: surah }) as Result
        } catch (e) {
            console.log(e)
        }
    }

    return {
        mostPlayed,
        setMostPlayed,
        getMostPlayed,
        addSurahToMostPlayed,
    }
}