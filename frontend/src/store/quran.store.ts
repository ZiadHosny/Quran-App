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
        getAllQuranReciters: builder.query<QuranReciterType[], any>({
            query: () => {
                return {
                    url: `/quran/quranReciters`,
                    method: 'GET',
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
                console.log(body, 'zzzz')

                return {
                    url: `/user/progress`,
                    method: 'PUT',
                    body: body,
                    headers: { token }
                }
            }
        }),
        getProgress: builder.mutation<{ data: { userProgress: UserProgress } }, { token: string }>({
            query: ({ token }) => ({
                url: `/user/progress`,
                method: 'GET',
                headers: { token }
            }),
        }),
        addToPlaylist: builder.mutation({
            query: ({ body, token }: { body: SurahType, token: string }) => {
                console.log(body)

                return {
                    url: `/user/playlist`,
                    method: 'PUT',
                    body: body,
                    headers: { token }
                }
            }
        }),
        removeFromPlaylist: builder.mutation({
            query: ({ surahId, token }: { surahId: string, token: string }) => {
                return {
                    url: `/user/playlist`,
                    method: 'DELETE',
                    body: { surahId },
                    headers: { token }
                }
            }
        }),
        getPlaylist: builder.mutation<{ data: { playlist: SurahType[] } }, { token: string }>({
            query: ({ token }) => ({
                url: `/user/playlist`,
                method: 'GET',
                headers: { token }
            }),
            transformResponse: (res: any) => {
                return res
            },
        }),
    })
})

export const {
    useGetAllQuranRecitersQuery,
    useGetAllSuwarByQuranReciterQuery,
    useSaveProgressMutation,
    useGetProgressMutation,
    useAddToPlaylistMutation,
    useGetPlaylistMutation,
    useRemoveFromPlaylistMutation,
} = taskApiSlice