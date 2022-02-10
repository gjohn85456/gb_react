
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