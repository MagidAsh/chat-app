import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

const Chats = () => {

    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }

    return (          
        // 100vh, which is the height value of the ChatEngine Component, is reduced from 50px, which is the height value of the Navbar Component container class, with the Calc function.
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine 
                height = "calc(100vh - 50px)"
                projectID = "4fac6bc1-e9b0-40e8-b55a-a65897f2958b"
                userName = "."
                userSecret = "."
            />
            
        </div>
    );
};

export default Chats;