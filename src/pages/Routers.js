import { Box, Paper, ListItem, ListItemButton } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom'
import Chats from './Chats';
import Home from './Home';
import NoChats from './NoChats';
import Profile from './Profile';
// import '../App.scss';

const Routers = () => {
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
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/chats/:chatId' element={<Chats />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<NoChats />} />
            </Routes>
        </div>
    )
}

export default Routers
