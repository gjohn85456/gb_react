import { ADD_MESSAGE } from "./actions";

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
            //console.log(action);
            const currentList = state.messageList[action.chatId] || [];
            console.log(currentList);
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
        default:
            return state
    }
}

export default messagesReduser;