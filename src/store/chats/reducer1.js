import { FB_GET_CHAT, FB_UPDATE_CHATS } from './actions1'

// const initialState = {
//     chats: [],
//     messageList: []
// };

const data = [];

const fbChatsReducer = (state = data, action) => {

    switch (action.type) {
        case FB_GET_CHAT: {
            console.log('мы тут FB_GET_CHAT');
            state = action.data;
            return state;
        }
        case FB_UPDATE_CHATS: {
            console.log('мы тут FB_UPDATE_CHATS');
            state = action.data;
            return state
        }
        default:
            console.log('мы тут default');
            return state
    }
}

export default fbChatsReducer;


