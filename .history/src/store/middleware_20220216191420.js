import { getDatabase } from "firebase/database";
import { API_URL_PUBLIC } from "../contants/endpoints";
import { getGistsFailure, getGistsRequest, getGistsSuccess } from "./gists/actions";

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


export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase();
    const chatRef = fer(db, '/chats/');
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({ id: item, name: data[item].name }));
        dispatch(chatListUpdate(chatArr));
    });
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
