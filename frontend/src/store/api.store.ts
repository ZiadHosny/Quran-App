import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { backendUrl } from '../utils/envs'

const baseQuery = fetchBaseQuery({ baseUrl: backendUrl })
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Quran'],
    endpoints: (_builder) => ({})
})