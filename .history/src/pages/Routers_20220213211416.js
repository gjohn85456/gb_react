import React from 'react';
import { Box, Paper, ListItem, ListItemButton, Button } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom'
import Chats from './Chats';
import Home from './Home';
import NoChats from './NoChats';
import Profile from './Profile';
import Gists from './Gists';
import RequiredAuth from '../hocs/RequiredAuth';
import Login from './login';
import SignUp from './SignUp';
import useAuth from '../hook/useAuth'

const Routers = () => {
    const auth = useAuth();
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Paper elevation={0} sx={{ minWidth: 256, display: 'flex' }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56, width: 100 }}>
                            <Link to='/signup'>Sign up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/login'>login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56, width: 100 }}>
                            <Button onClick={() => auth.signout()}>Sign out</Button>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route exact element={<Home />} />
                    <Route path='/' exact element={<Home />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/signup' exact element={<SignUp />} />
                    <Route element={<RequiredAuth />}>
                        <Route path='/chats/' exact element={<NoChats />} />
                        <Route path='/chats/' element={<Chats />} />
                        <Route path='/chats/:chatId' element={<Chats />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/gists' element={<Gists />} />
                    </Route>
                    <Route path="*" element={<NoChats />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routers
