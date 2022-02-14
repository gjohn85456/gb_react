import React from 'react';
import { Box, Paper, ListItem, ListItemButton } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom'
import Chats from './Chats';
import Home from './Home';
import NoChats from './NoChats';
import Profile from './Profile';
import Gists from './Gists';
import RequiredAuth from '../hocs/RequiredAuth';
import Login from './login';
import SignUp from './SignUp';


const Routers = () => {

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
                            <Link to='/singup'>Sign up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/login'>login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 56, width: 100 }}>
                            <Link to='/login'>Sign out</Link>
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
                        <Route path='/chats/:chatId' element={<Chats />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/gists' element={<Gists />} />
                    </Route>
                    <Route path='*' element={<NoChats />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routers
