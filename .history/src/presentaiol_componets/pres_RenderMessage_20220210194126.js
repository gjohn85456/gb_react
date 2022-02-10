
import { List, ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Face, Person } from '@mui/icons-material';

const pres_RenderMessage = (index, author, text) => {
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
}