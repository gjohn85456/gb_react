import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";

import { createStore } from "redux";

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer

})

export const store = createStore();

profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()