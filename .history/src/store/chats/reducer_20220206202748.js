import { ADD_CHAT } from "./actions";

const initialState = {
    chatList: []
}

/** chatList: [{
 *      id: string,
 *      name:string
 * }] 
 * */
const chatsReducer = (state = initialState, action) => {
    console.log(action);
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
        default:
            return state
    }
}

export default chatsReducer;