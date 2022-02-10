
import { ListItem, ListItemText, Box, ListItemAvatar, Avatar } from '@mui/material'
import { Adb, Person } from '@mui/icons-material';

const pres_RenderMessage = (index, author, text) => {
    return (
        <ListItem
            button
            key={index}
        >
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: author === 'bender' ? 'green' : '#1d46ad' }}>
                    {author !== profileName ? <Adb /> : <Person />}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={message.text} secondary={author} />
        </ListItem>
    )
}
export default pres_RenderMessage
