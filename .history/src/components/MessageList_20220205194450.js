import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Face } from '@mui/icons-material';
import { useSelector } from 'react-redux'



const MessageList = ({ messages }) => {
    const profileName = useSelector(state => state.name);
    console.log(profileName);

    return (
        <Box
            sx={{
                width: 300,
                height: 600,
                border: '1px solid #ccc',
                overflow: 'auto'
            }}>
            <List sx={{ mb: 2 }}>
                {messages.map((message, id) => (
                    <ListItem
                        button
                        key={id}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: message.author === 'bot' ? 'green' : '#1d46ad' }}>
                                {message.author !== profileName ? <Adb /> : <Face />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={message.text} secondary={message.author} />
                    </ListItem>
                ))}
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

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string,
        id: PropTypes.number

    }))
}

export default MessageList