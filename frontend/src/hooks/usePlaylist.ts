/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth0 } from '@auth0/auth0-react';

import { useSurah } from './useSurah';
import {
    useAddToPlaylistMutation,
    useGetPlaylistMutation,
    useRemoveFromPlaylistMutation
} from '../store/quran.store';
import { getToken } from '../utils/getToken';
import { Result, SurahType } from '../utils/types';
import { loadingToast, updateToastError, updateToastSuccess } from '../utils/toast';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { surahActions } from '../store/surah.store';
import { useLocation } from 'react-router-dom';

export const usePlaylist = () => {
    const { playlist } = useAppSelector(state => state.surah)
    const { setCurrentSurah, setSuwar } = useSurah()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { getIdTokenClaims } = useAuth0();
    const [addSurahToPlaylistFn] = useAddToPlaylistMutation()
    const [removeSurahToPlaylistFn] = useRemoveFromPlaylistMutation()
    const [getPlaylistFn] = useGetPlaylistMutation()

    // setPlaylist
    const setPlaylist = (playlist: SurahType[]) => {
        dispatch(surahActions.setPlaylist(playlist))
    }

    const addSurahToPlaylist = async ({ surah }: { surah: SurahType }) => {
        const token = await getToken(getIdTokenClaims);
        if (token) {
            const id = loadingToast();
            const res = await addSurahToPlaylistFn({ body: surah, token }) as Result
            if (res.error) {
                return updateToastError({ id, render: res.error.data.err })
            }
            await getPlaylist()
            return updateToastSuccess({ id, render: res.data.message })
        }
    }

    const removeSurahToPlaylist = async ({ surahId }: { surahId: string }) => {
        const token = await getToken(getIdTokenClaims);
        if (token) {
            const id = loadingToast()
            const res = await removeSurahToPlaylistFn({ surahId, token }) as Result
            if (res.error) {
                return updateToastError({ id, render: res.error.data.err })
            }
            await getPlaylist()
            return updateToastSuccess({ id, render: res.data.message })
        }
    }

    const getPlaylist = async () => {
        const token = await getToken(getIdTokenClaims);
        if (token) {
            // const id = loadingToast()
            const res = await getPlaylistFn({ token }) as Result
            // if (res.error) {
            //     return updateToastError({ id, render: res.error.data.err })
            // }
            const { data, message } = res.data
            const playlist = data as SurahType[]
            if (playlist) {
                setPlaylist(playlist)
                if (location.pathname === '/myPlaylist') {
                    setCurrentSurah(playlist[0])
                    setSuwar(playlist)
                }
            }
            // return updateToastSuccess({ id, render: message })
        }
    }

    const isInPlaylist = (surahId: string): boolean => {
        const surah = playlist.find((surah) => {
            return surah.id === surahId
        })
        if (!surah) {
            return false
        }
        return true
    }

    return {
        playlist,
        setPlaylist,
        addSurahToPlaylist,
        removeSurahToPlaylist,
        getPlaylist,
        isInPlaylist
    }
}