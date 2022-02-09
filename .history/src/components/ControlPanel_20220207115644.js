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
    const profileName = useSelector(sate => state.profile.name);
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
        if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
            timer = setInterval(() => {
                const currentMessage = botNet.length > 0 ? botNet.shift() : 'hi human';
                setMessageList([...messageList, {
                    text: currentMessage,
                    author: Autorenew.bot
                }]);
            }, 1500);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [messageList]);

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
                    value={props.value}
                    onChange={props.handleChange}
                />
                <Fab onClick={props.handleSend}>
                    <Send />
                </Fab>
            </Box>
        </div>
    )

}

export default ControlPanel;