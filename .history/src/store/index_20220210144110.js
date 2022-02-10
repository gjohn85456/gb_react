import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
import middleware from './middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer

})
//Реализация redux без moddleware
// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

//Рефлизаиця с moddleware
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));
