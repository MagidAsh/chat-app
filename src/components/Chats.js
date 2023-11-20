import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import axios from 'axios';

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

// Context
import { AuthContext } from "../context/AuthContextProvider";

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "4fac6bc1-e9b0-40e8-b55a-a65897f2958b",                
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "bd6c37ce-9e4d-4c01-b56b-7d5ffbca0496"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                    
                })
        })

    }, [user, navigate])


    //A function that creates a photo file for us by taking a URL and finally takes a the user's email photo for us
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/")
    }

    if (!user || loading) return "Loading..."

    
 // 100vh, which is the height value of the ChatEngine Component, is reduced from 50px, which is the height value of the Navbar Component container class, with the Calc function.

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="4fac6bc1-e9b0-40e8-b55a-a65897f2958b"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chats;