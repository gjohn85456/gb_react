import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
import middleware from './middleware'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer

})
//Реализация redux без moddleware
// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

//Реализаиця с moddleware
//export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga)
