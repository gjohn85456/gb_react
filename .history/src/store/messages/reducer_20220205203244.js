import { ADD_MEESAGE } from "./actions";

const initialState = {
    message: {}
}

/**
 *  messageList: {
 *      [chatId]: {
 *          id:string, ex: 01,02,03
 *          text: string
 *          author: string
 *       }
 * }
 */

const messagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MEESAGE: {

        }
        default:
            return state
    }
}