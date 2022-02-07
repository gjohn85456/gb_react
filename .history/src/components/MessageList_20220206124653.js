import React from 'react';
import { useCallback } from 'react'
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Face } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'



const MessageList = ({ messageList }) => {
    const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    let { chatId } = useParams();

    const getMessagesById = messages[chatId];
    console.log(chatId);
    console.log(getMessagesById);
    const renderMessage = useCallback((message, index) => {
        return (
            <ListItem
                button
                key={index}
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: message.author === 'bot' ? 'green' : '#1d46ad' }}>
                        {message.author !== profileName ? <Adb /> : <Face />}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={message.text} secondary={message.author} />
            </ListItem>
        )
    }, [])


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
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
            </List>
            {/* <div className='messages_space'>
                {messages.map((message, id) => (
                    <div className={`messages_${message.author === 'human' ? 'human' : 'robot'}`} key={id}>
                        {message.text} - say: {message.author}
                    </div>
                ))}
            </div> */}
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