import { Link } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material';
import { useSelector } from 'react-redux'

const ChatList = () => {
    const chats = useSelector(state => state.chats.ChatList)

    return <div className={'chatList'}>
        {Object.keys(chats).map((chat, i) => (
            <Link to={`/chats/${chat}`} style={{ color: chat === chatId ? 'grey' : 'black' }} key={i}>{chats[chat].name} </Link>
        ))}
    </div >
}

export default ChatList