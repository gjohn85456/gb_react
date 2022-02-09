import { ADD_MEESAGE } from "./actions";

const initialState = {
    message: {}
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
        case ADD_MEESAGE: {
            console.log(action);
            return {
                ...state,
                messageList: {
                    [action.chatId]:  
                }
            }
        }
        default:
            return state
    }
}