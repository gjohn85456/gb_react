import React, { useEffect, useState } from 'react';
import { useCallback } from 'react'
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Face, Person } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { pres_RenderMessage } from '../presentaiol_components/pres_RenderMessage'
import { getDatabase, get, ref, child } from 'firebase/database'
import firebase from '../service/firebase';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const profileName = useSelector(state => state.profile.name);
    //const messages = useSelector(state => state.messages.messageList);
    let { chatId } = useParams();
    //const getMessagesById = messages[chatId];

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db)
        get(child(dbRef, `/messages/${chatId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const msg = Object.values(snapshot.val());
                    setMessages(msg);
                } else {
                    console.error('Ошибка однако');
                }
            });
    }, [chatId]);

    const renderMessage = useCallback((message, index) => {
        console.log(message);
        return (

            // <pres_RenderMessage index={index} author={message.author} text={message.text} profileName={profileName} />

            <ListItem
                button
                key={index}
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: message.author === 'bender' ? 'green' : '#1d46ad' }}>
                        {message.author !== profileName ? <Adb /> : <Person />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={message.text} secondary={message.author} />
            </ListItem>
        )
    }, []);


    return (
        <Box
            sx={{
                width: 300,
                height: 600,
                border: '1px solid #ccc',
                overflow: 'auto'
            }}>
            <List sx={{ mb: 2 }}>
                {/* getMessagesById?.map - знак ? тут используется для проверкри на undefined */}
                {messages.map((message, index) => renderMessage(message, index))}
            </List>
        </Box>

    )
}

// MessageList.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.shape({
//         text: PropTypes.string,
//         author: PropTypes.string,
//         id: PropTypes.number

//     }))
// }

export default MessageList