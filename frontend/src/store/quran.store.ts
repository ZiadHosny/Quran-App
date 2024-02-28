import { apiSlice } from "./api.store";
import { QuranReciterType, SurahType } from "../utils/types";

// const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

// const token = { headers: { token: userInfo?.token } }

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
                return res
            },
        }),
        getAllSuwarByQuranReciter: builder.query<SurahType[], getAllSuwarByQuranReciterProps>({
            query: ({ quranReciter }) => {
                return {
                    url: `/quran/${quranReciter}/suwar`,
                    method: 'GET',
                    // ...token,
                }
            },
            transformResponse: (res: any) => {
                return res
            }
        }),
        // createTask: builder.mutation({
        //     query: (data) => ({
        //         url: `${Task_URL}/`,
        //         method: 'POST',
        //         body: data,
        //         ...token
        //     }),
        // }),
        // updateTask: builder.mutation({
        //     query: ({ body, taskId }: { body: Task, taskId: string }) => ({
        //         url: `${Task_URL}/${taskId}`,
        //         method: 'PUT',
        //         body: body,
        //         ...token
        //     }),
        // }),
        // deleteTask: builder.mutation({
        //     query: (id: string) => ({
        //         url: `${Task_URL}/${id}`,
        //         method: 'DELETE',
        //         ...token
        //     }),
        // }),
        // markAsImportant: builder.mutation({
        //     query: ({ id, important }: { id: string, important: boolean }) => ({
        //         url: `${Task_URL}/${id}/important`,
        //         method: 'PATCH',
        //         body: { important },
        //         ...token
        //     }),
        // }),
        // markAsCompleted: builder.mutation({
        //     query: ({ id, completed }: { id: string, completed: boolean }) => ({
        //         url: `${Task_URL}/${id}/completed`,
        //         method: 'PATCH',
        //         body: { completed },
        //         ...token
        //     }),
        // }),
    })
})

export const {
    useGetAllQuranRecitersQuery,
    useGetAllSuwarByQuranReciterQuery,
    // useCreateTaskMutation,
    // useDeleteTaskMutation,
    // useUpdateTaskMutation,
    // useMarkAsCompletedMutation,
    // useMarkAsImportantMutation
} = taskApiSlice