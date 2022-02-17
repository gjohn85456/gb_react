import { FB_ADD_CHAT, FB_DELETE_CHAT, FB_UPDATE_CHAT } from './actions1'
import firebase from '../../service/firebase';
import { getDatabase, ref, get, child, push, set } from 'firebase/database'
import { useEffect } from 'react';

const [chats, setChats] = useEffect([]);

const initialState = () => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    const arr = async () => {
        await get(child(dbRef, '/chats')).then((snapshot) => {
            if (snapshot.val()) {
                const obj = snapshot.val();
                const chatIds = Object.keys(obj);
                const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
            } else {
                console.log('нет данных');
            }
        });
    }
    return arr;
}

const fbChatsReducer = (state = '', action) => {
    let arr = initialState();
    console.log(arr);
    const db = getDatabase(firebase);
    switch (action.type) {
        case FB_ADD_CHAT: {
            const chatRef = ref(db, '/chats');
            const newChatRef = push(chatRef);
            set(newChatRef, { name: action.name });
            console.log(' мы пробуем добавить чат FB_ADD_CHAT');
        }
        case FB_DELETE_CHAT: {
            console.log(' мы пробуем удалить чат FB_DELETE_CHAT');
        }
        default:
            return state
    }
}

export default fbChatsReducer;


