import { FB_UPDATE_MESSAGE } from './actions1';


// const initialState = {
//     messageList: {}
// }

// const initialState = {
//     chats: [],
//     messageList: []
// };

const data = [];

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

// const messagesReduser = (state = initialState, action) => {
const fbMessagesReduser = (state = data, action) => {
    console.log(state);
    switch (action.type) {
        case FB_UPDATE_MESSAGE: {
            console.log(state);
            console.log(action.messageList);
            state = action.messageList;
            return state
        }
        default:
            return state
    }
}

export default fbMessagesReduser;