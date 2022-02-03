import React, { useState } from 'react';
import { Box, Paper, ListItem, ListItemButton } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom'
import Chats from './Chats';
import Home from './Home';
import NoChats from './NoChats';
import Profile from './Profile';
const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ id: 0, text: "FirstMessage from chat1", author: 'human' }],
    },
    id2: {
        name: "Chat2",
        messages: [
            { id: 0, text: "FirstMessageHereToo! from chat2", author: 'human' },
            { id: 1, text: "Hi human from chat2", author: 'bot' }
        ],
    },
};

const Routers = () => {
    const [chatsList, setChatsList] = useState(initialChats);

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Paper elevation={0} sx={{ minWidth: 256, display: 'flex' }}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/chats/:chatId' element={<Chats chats={chatsList} />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NoChats chats={chatsList} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routers
