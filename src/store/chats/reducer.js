import { FB_GET_CHAT, FB_UPDATE_CHATS } from './actions'

const data = [];

const fbChatsReducer = (state = data, action) => {

    switch (action.type) {
        case FB_GET_CHAT: {
            state = action.data;
            return state;
        }
        case FB_UPDATE_CHATS: {
            state = action.data;
            return state
        }
        default:

            return state
    }
}

export default fbChatsReducer;


