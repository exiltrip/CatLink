'use client'
import axios from "axios";
import {useEffect, useState} from "react";

type Props = {
    params: {
        id: string
    }
}
const Profile = ({params: {id}}: Props) => {
    const [userData, setUserData] = useState({title: "", id: ""})
    const getUserData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                setUserData(res.data)
            })
    }
    useEffect(() => getUserData, [])
    return (
        <div className="container2">
            <p>title: {userData.title}</p>
            <p>id: {userData.id}</p>
        </div>
    );
};

export default Profile;