import { apiSlice } from "./api.store";
import { QuranReciterType, SurahType, UserProgress } from "../utils/types";

export type GetAllTasksProps = {
    dir?: string,
    page?: number,
    sort?: string,
    important?: boolean,
    date?: string,
    completed?: boolean,
}

export type getAllSuwarByQuranReciterProps = {
    quranReciter: string
}

const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllQuranReciters: builder.mutation<QuranReciterType[], { token: string }>({
            query: ({ token }) => {
                return {
                    url: `/quran/quranReciters`,
                    method: 'GET',
                    headers: { authorization: token }
                }
            },
            transformResponse: (res: any) => {
                return res.data
            },
        }),
        getAllSuwarByQuranReciter: builder.query<SurahType[], getAllSuwarByQuranReciterProps>({
            query: ({ quranReciter }) => {
                return {
                    url: `/quran/${quranReciter}/suwar`,
                    method: 'GET',
                }
            },
            transformResponse: (res: any) => {
                return res.data
            }
        }),
        saveProgress: builder.mutation({
            query: ({ body, token }: { body: UserProgress, token: string }) => {
                return {
                    url: `/user/progress`,
                    method: 'PUT',
                    body: body,
                    headers: { authorization: token }
                }
            }
        }),
        getProgress: builder.mutation<{ data: { userProgress: UserProgress } }, { token: string }>({
            query: ({ token }) => ({
                url: `/user/progress`,
                method: 'GET',
                headers: { authorization: token }
            }),
        }),
        addToPlaylist: builder.mutation({
            query: ({ body, token }: { body: SurahType, token: string }) => {
                return {
                    url: `/user/playlist`,
                    method: 'PUT',
                    body: body,
                    headers: { authorization: token }
                }
            }
        }),
        removeFromPlaylist: builder.mutation({
            query: ({ surahId, token }: { surahId: string, token: string }) => {
                return {
                    url: `/user/playlist`,
                    method: 'DELETE',
                    body: { surahId },
                    headers: { authorization: token }
                }
            }
        }),
        getPlaylist: builder.mutation<{ data: { playlist: SurahType[] } }, { token: string }>({
            query: ({ token }) => ({
                url: `/user/playlist`,
                method: 'GET',
                headers: { authorization: token }
            }),
            transformResponse: (res: any) => {
                return res
            },
        }),
        getMostPlayed: builder.mutation<{ data: { mostPlayed: SurahType[] } }, void>({
            query: () => ({
                url: `/quran/mostPlayed`,
                method: 'GET',
            }),
            transformResponse: (res: any) => {
                return res
            },
        }),
        addSurahMostPlayed: builder.mutation({
            query: ({ body }: { body: SurahType }) => ({
                url: `/quran/playSurah`,
                method: 'POST',
                body,
            }),
            transformResponse: (res: any) => {
                return res
            },
        }),
        sendNotification: builder.mutation({
            query: ({ subscription }: { subscription: any }) => {
                return {
                    url: `/notification/subscribe`,
                    method: 'POST',
                    body: subscription,
                }
            }
        }),
    })
})

export const {
    useGetAllQuranRecitersMutation,
    useGetAllSuwarByQuranReciterQuery,
    useSaveProgressMutation,
    useGetProgressMutation,
    useAddToPlaylistMutation,
    useGetPlaylistMutation,
    useRemoveFromPlaylistMutation,
    useSendNotificationMutation,
    useGetMostPlayedMutation,
    useAddSurahMostPlayedMutation,
} = taskApiSlice