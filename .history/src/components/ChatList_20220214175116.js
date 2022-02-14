import { Link, useParams } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addChat, delChat } from '../store/chats/actions'
import { delChatMessages } from '../store/messages/actions'
import { getDatabase, ref, set, push, get, child } from 'firebase/database'
import firebase from "../service/firebase";

const ChatList = () => {
    /*lesson9 не получаем чаты из redux
    const chats = useSelector(state => state.chats.chatList);
    
    */
    const message = useSelector(state => state.messages);
    const [chats, setChats] = useState([]);
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
        /*рализация через redux
        dispatch(addChat(newChatName));
        */
        const db = getDatabase(firebase);
        const chatRef = ref(db, '/chats');
        const newChatRef = push(chatRef);
        set(newChatRef, { name: newChatName }).then((res) => { console.log(res) })
        setNewChatName('');
        handleClose();
    }

    const onDeleteChat = () => {
        dispatch(delChat(delChatName));
        let delChatId;
        delChatId = chats.find((f) => {
            if (f.name === delChatName) return f.id;
        });
        dispatch(delChatMessages(delChatId));
        setDelChatName('');
        handleCloseDelete();
    }

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            onAddChat();
            e.preventDefault();
        }
        if (e.keyCode === 32) {
            console.log(chats);
            console.log(message);
        }
    }

    useEffect(() => {
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        get(child(dbRef, '/chats')).then((snapshot) => {
            if (snapshot.val()) {
                const obj = snapshot.val();
                const chatIds = Object.keys(obj);
                const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
                setChats(chatArr);
            } else {
                console.log('нет данных');
            }

        });
    }, [])

    return (
        <div className="chatList">
            {chats.map((chat, index) => (
                <div key={index}>
                    <Link to={`/chats/${chat.id}`}>
                        <b style={{ color: chat.id === chatId ? 'black' : 'grey' }}>
                            {chat.name}
                        </b>
                        <button onClick={() => handlerDelete(chat.id)}>
                            <Delete />
                        </button>
                    </Link>
                </div>
            ))}
            <div>
                <Button onClick={handleOpen}>Add chat</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please write a chat name</DialogTitle>
                    <div className="chatNameBox">
                        <TextField autoFocus onKeyDown={pressEnter} value={newChatName} onChange={handleChange} />
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
}

export default ChatList