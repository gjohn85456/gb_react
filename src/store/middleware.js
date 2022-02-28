import { API_URL_PUBLIC } from "../contants/endpoints";
import { getGistsFailure, getGistsRequest, getGistsSuccess } from "./gists/actions";
import { getDatabase, ref, get, child, push, set, onValue, remove } from 'firebase/database'
import firebase from '../service/firebase';
import { fbGetChat, fbListChatsUpdate, } from './chats/actions'
import { fbUpDateMessage } from "./messages/actions";

export const getALLGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
    try {
        const res = await fetch(API_URL_PUBLIC);
        if (!res.ok) {
            throw new Error(`Ошибка ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message))
    }
}

export const getDataFromFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    get(child(dbRef, '/chats')).then((snapshot) => {
        if (snapshot.val()) {
            const obj = snapshot.val();
            const chatIds = Object.keys(obj);
            const chatArr = chatIds.map(item => ({ id: item, name: obj[item].name }));
            console.log(chatArr);
            dispatch(fbGetChat(chatArr));
        } else {
            console.log('нет данных');
        }
    });

}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase();
    const chatRef = ref(db, '/chats/');

    onValue(chatRef, (snapshot) => {
        console.log('Чат onValue');
        const data = snapshot.val();
        if (!data) return dispatch(fbListChatsUpdate([]));
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(fbListChatsUpdate(chatArr));
    });
}

export const initTrackerWithFBMessage = (chatId) => async (dispatch) => {
    const db = getDatabase();
    const chatRef = ref(db, `/messages/${chatId}`);
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) return dispatch(fbUpDateMessage([]));
        const messagesList = Object.values(data);
        dispatch(fbUpDateMessage(messagesList));
    });
}

export const addChatFB = (newChatName) => async () => {
    const db = getDatabase();
    const chatRef = ref(db, '/chats');
    const newChatRef = push(chatRef);
    set(newChatRef, { name: newChatName });
}

export const addMsgFB = (chatId, message) => async () => {
    const db = getDatabase();
    const messageRef = ref(db, `/messages/${chatId}/`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message).then((res) => console.log(res));
}

export const delChatFB = (idDelChat) => async () => {
    const db = getDatabase();
    const chatRef = ref(db, `/chats/${idDelChat}`);
    const messagesRef = ref(db, `/messages/${idDelChat}`);
    remove(chatRef).then(res => console.log('remove chat', res));
    remove(messagesRef).then(res => console.log('removed msg', res));
}

//Lesson 7
// import { addMessage, ADD_MESSAGE } from "./messages/actions";

// const middleware = store => next => action => {
//     if (action.type === ADD_MESSAGE && action.message.author !== 'bender') {
//         const bederMessage = { text: 'i am a robot', author: 'bender' };
//         setTimeout(() => {
//             store.dispatch(addMessage(action.chatId, bederMessage))
//         }, 1000);
//     }
//     return next(action);
// };

// export default middleware
