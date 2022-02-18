import { Link, useParams } from "react-router-dom";
import { Delete } from '@mui/icons-material'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataFromFireBase } from '../store/middleware'
import { fbDeleteChat, fbAddChat } from "../store/chats/actions1";

const ChatList = () => {
    const dispatch = useDispatch();
    let fbChats = useSelector(state => state.fbChats);;
    const message = useSelector(state => state.messages);
    const [chats, setChats] = useState([]);
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');


    const handleOpen = () => {
        setVisible(true);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(fbAddChat(newChatName));
        dispatch(getDataFromFireBase());
        setNewChatName('');
        handleClose();
    }

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            onAddChat();
            e.preventDefault();
        }
        if (e.keyCode === 32) {
            console.log(fbChats);
            console.log('hello');
            //console.log(message);
        }
    }

    const handlerDelete = (id) => {
        dispatch(fbDeleteChat(id));
        dispatch(getDataFromFireBase());
    };

    useEffect(() => {
        console.log(fbChats);
        setChats(fbChats);
    }, [fbChats]);

    // useEffect(() => {
    //     const db = getDatabase(firebase);
    //     const dbRef = ref(db);
    //     get(child(dbRef, '/chats')).then((snapshot) => {
    //         if (snapshot.val()) {
    //             const obj = snapshot.val();
    //             const chatIds = Object.keys(obj);
    //             const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
    //             console.log(chatArr);
    //             setChats(chatArr);
    //         } else {
    //             console.log('нет данных');
    //         }

    //     });
    // }, []);

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
            </div>
        </div>
    )
}

export default ChatList