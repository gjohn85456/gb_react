import { ADD_CHAT } from "./actions";

const initonalState = {
    chatList: []
}

/** chatList: [{
 *      id: string,
 *      name:string
 * }] 
 * */
const chatsReduser = (state, action) => {
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

export default chatsReduser