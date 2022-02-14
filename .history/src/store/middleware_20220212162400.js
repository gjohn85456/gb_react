import { API_URL_PUBLIC } from "../contants/endpoints";
import { getGistsRequest } from "./gists/actions";

const GET_GISTS = 'GISTS::GET_GISTS';
const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';

const getGists = () => ({
    type: GET_GISTS
});

const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    palyload: gists
})

export const getALLGists = () => async (dispatche) => {
    dispatch(getGistsRequest());
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