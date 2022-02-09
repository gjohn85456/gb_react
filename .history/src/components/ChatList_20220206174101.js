import { Link, useParams } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button } from '@mui/material';
import { useSelector } from 'react-redux'

const ChatList = () => {
    const chats = useSelector(state => state.chats.ChatList);
    const { chatId } = useParams();

    return (
        <div className="chatList">
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatID ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                    </Link>
                </div>))}

        </div>
    )


    {/*     
     <div className={'chatList'}>
         {Object.keys(chats).map((chat, i) => (
            <Link to={`/chats/${chat}`} style={{ color: chat === chatId ? 'grey' : 'black' }} key={i}>{chats[chat].name} </Link>
        ))}
    </div > */}
}

export default ChatList