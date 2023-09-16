import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProfile} from "@/redux/profile/profile.types";

export const profileApi = createApi({
    reducerPath: 'api/profile',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: build => ({
        getProfile: build.query<IProfile, any>({query: (id) => `todos/${id}`})
    })
})

export const {useGetProfileQuery} = profileApi