import { Link, useParams } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useState } from "react";
import { useDispatch } from "react-redux";

const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true);
    };
    const handleClose = () => {
        setVisible(false);
    };
    const handleChange = (e) => setNewChatName(e.target.value);
    const onAddChat = () => {
        dispatch(addChat(newChatName));
    }
    return (
        <div className="chatList">
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Add chat</Button>
                <Dialog open={visible} onCLose={handleClose}>
                    <DialogTitle>Please write a chat name</DialogTitle>
                    <div className="chatNameBox">
                        <TextField value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName}>Add chat</Button>
                    </div>
                </Dialog>
            </div>
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