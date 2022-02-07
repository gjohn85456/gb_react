import { Box, Fab, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Autorenew, Send } from '@mui/icons-material';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/messages/actions';

const ControlPanel = () => {
    const [value, setValue] = useState('');
    const messages = useSelector(state => state.messages.messageList);
    const profileName = useSelector(state => state.profile.name);
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, []);

    const sendMessage = (message, author) => {
        dispatch(addMessage(chatId, {
            text: message,
            author: author
        }))
    }

    const handleVutton = () => {
        sendMessage(value, profileName)
    }

    useEffect(() => {
        let timer;
        const currentChat = messages[chatId];
        if (currentChat.length > 0 && currentChat[currentChat.length - 1]?.author === profileName) {
            timer = setInterval(() => {
                const currentMessage = 'hi human';
                sendMessage(currentMessage, 'bender')
            }, 1500);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [messages[chatId]]);

    return (
        <div>
            <Box
                sx={{
                    marginTop: '20px'
                }}
                component='form'
                noValidate
                autoComplete='off'
                flexDirection='row'
                justifyContent='space-between'
            >
                <TextField
                    autoFocus
                    style={{ margin: '0 20px' }}
                    id='outlined-basic'
                    label='Enter a message'
                    variant='filled'
                    value={value}
                    onChange={handleChange}
                />
                <Fab onClick={sendMessage}>
                    <Send />
                </Fab>
            </Box>
        </div>
    )

}

export default ControlPanel;