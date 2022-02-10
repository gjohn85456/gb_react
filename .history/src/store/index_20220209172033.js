import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
import middleware from './middleware'

const composeEnhancers = windows.__REDUX_DEVTOOLS_EXTENSION__ && windows.__REDUX_DEVTOOLS_EXTENSION__

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer

})

// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));
