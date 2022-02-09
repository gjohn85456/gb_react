import { Link, useParams } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat, delChat } from '../store/chats/actions'

const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const [delChatName, setDelChatName] = useState('');
    const dispatch = useDispatch();

    const handleOpen = () => {
        setVisible(true);
    };

    const handleOpenDelete = () => {
        setVisibleDelete(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleCloseDelete = () => {
        setVisibleDelete(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);
    const delHandleChange = (e) => setDelChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName('');
        handleClose();
    }
    const onDeleteChat = () => {
        console.log(dispatch(delChat(delChatName)));

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
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please write a chat name</DialogTitle>
                    <div className="chatNameBox">
                        <TextField autoFocus value={newChatName} onChange={handleChange} />
                        <Button onClick={onAddChat} disabled={!newChatName}>Add chat</Button>
                    </div>
                </Dialog>
                <Button onClick={handleOpenDelete}>Delete chat</Button>
                <Dialog open={visibleDelete} onClose={handleCloseDelete}>
                    <DialogTitle>Enter the name of the chat to be deleted</DialogTitle>
                    <div className="chatNameBox">
                        <TextField autoFocus value={delChatName} onChange={delHandleChange} />
                        <Button onClick={onDeleteChat} disabled={!delChatName}>Delete chat</Button>
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