import React from 'react';
import { useCallback } from 'react'
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Face, Person } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { pres_RenderMessage } from '../presentatiol_components/pres_RenderMessage'


const MessageList = () => {
    const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    let { chatId } = useParams();
    const getMessagesById = messages[chatId];

    const renderMessage = useCallback((message, index) => {
        return (
            <pres_RenderMessage />
            // <ListItem
            //     button
            //     key={index}
            // >
            //     <ListItemAvatar>
            //         <Avatar sx={{ bgcolor: message.author === 'bender' ? 'green' : '#1d46ad' }}>
            //             {message.author !== profileName ? <Adb /> : <Person />}
            //         </Avatar>
            //     </ListItemAvatar>
            //     <ListItemText primary={message.text} secondary={message.author} />
            // </ListItem>
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
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
            </List>
        </Box>

    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.number

    }))
}

export default MessageList