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
const chatsReducer = (state = initialState, action) => {
    // console.log(action.type);
    // console.log(action);
    console.log(state);
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                chatList: [
                    ...state.chatList, {
                        id: `id${state.chatList.length}`,
                        name: action.name
                    }
                ]

            }
        }
        case DELETE_CHAT: {
            state.chatList.filter((f) => f !== action.name)
            state.chatList.forEach(function (item) {
                console.log(item);
            })
            console.log(action.name);
        }
        default:
            return state
    }
}

export default chatsReducer;