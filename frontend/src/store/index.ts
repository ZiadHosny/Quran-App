import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api.store";
import { loadingReducer } from "./loading.store";
import { controllersReducer } from "./controllers.store";
import { surahReducer } from "./surah.store";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        loading: loadingReducer,
        controllers: controllersReducer,
        surah: surahReducer,
        // modal: modalSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;