import {configureStore, createStore} from "@reduxjs/toolkit";
import {profileApi} from "@/redux/profile/profile.api";

export const store = configureStore({
    reducer: {[profileApi.reducerPath]: profileApi.reducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(profileApi.middleware)
})
