'use client'
import {useGetProfileQuery} from "@/redux/profile/profile.api";

const MyProfile = () => {
    const {data, isLoading, error} = useGetProfileQuery(1)

    return (
        <div className="container">
            profile: {isLoading ? "Загрузка..." : error ? "ошибка" : data.title}
        </div>
    );
};

export default MyProfile;