import { ADD_CHAT } from "./actions"
import { DELETE_CHAT } from "./actions"

const initialState = {
    chatList: []
}



/** chatList: [{
 *      id: string,
 *      name:string
 * }] 
 * */
const generationId = (s) => {
    let arr = [];
    arr = s.chatList.map((f) => f.id);
    arr = arr.map((e) => {
        let numId;
        ([, , numId] = e.split(''));
        console.log(numId++);
        console.log(typeof numId);
        return numId
    })
    const maxNum = (list) => {
        return list.reduce((a, b) => a > b ? a : b);
    }
    let id = maxNum(numberArray);
    return id++
}

//                         id: `id${state.chatList.length}`,
const chatsReducer = (state = initialState, action) => {
    let i = [state.chatList.length - 1]

    switch (action.type) {
        case ADD_CHAT: {
            generationId(state);
            return {
                ...state,
                chatList: [
                    ...state.chatList, {
                        id: 'id`,
                        name: action.name
                    }
                ]

            }
        }
        case DELETE_CHAT: {

            state.chatList = state.chatList.filter((f) => f.name !== action.name);
            return state
        }
        // case GET_CHATID: {
        //     let delChatId;
        //     delChatId = state.chatList.find((f) => {
        //         if (f.name === action.name) return f;
        //     });
        //     console.log('чат id ' + delChatId.id);
        //     return delChatId
        // }
        default:
            return state
    }
}

export default chatsReducer;