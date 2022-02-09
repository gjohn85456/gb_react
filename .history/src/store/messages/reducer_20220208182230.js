import { Satellite } from "@mui/icons-material";
import { ADD_MESSAGE, DELETE_CHAT_MESSAGES } from "./actions";


const initialState = {
    messageList: {}
}

/**
 * 
 * chatIdType = {
 *      id:string,
 *      text: string,
 *      author: string
 * }
 *  messageList: {
 *      [chatId]: chatIdType[]       
 * }
 */

const messagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`
                        }
                    ]
                }
            }
        }
        case DELETE_CHAT_MESSAGES: {
            let delId = action.chatId.id;
            console.log(state);
            console.log(action.chatId.id);
            console.log(delId);
            console.log(state.messageList.id0);
            ({ delId, ...state.messageList } = state.messageList);
            console.log(state);
            return state
        }
        default:
            return state
    }
}

export default messagesReduser;