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

export const usePlaylist = () => {
    const { getIdTokenClaims } = useAuth0();
    const { setPlaylist, playlist } = useSurah();
    const [addSurahToPlaylistFn] = useAddToPlaylistMutation()
    const [removeSurahToPlaylistFn] = useRemoveFromPlaylistMutation()
    const [getPlaylistFn] = useGetPlaylistMutation()

    const addSurahToPlaylist = async ({ surah }: { surah: SurahType }) => {
        const token= await getToken(getIdTokenClaims);
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
            const id = loadingToast()
            const res = await getPlaylistFn({ token }) as Result
            if (res.error) {
                return updateToastError({ id, render: res.error.data.err })
            }
            const { data, message } = res.data
            const playlist = data as SurahType[]
            if (playlist) {
                setPlaylist(playlist)
            }
            return updateToastSuccess({ id, render: message })
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
        addSurahToPlaylist,
        removeSurahToPlaylist,
        getPlaylist,
        isInPlaylist
    }
}