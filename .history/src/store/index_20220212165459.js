import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
import gistsReducer from "./gists/reducer";
import middleware from './middleware'
import mySaga from "./sagas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage
}

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer
})

const persistedReducer = persistReducer(persistConfig, allReducers);


//Реализация redux без moddleware
// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

//Реализаиця с moddleware
//export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));

//Реализация до использования redux-persist
//export const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(mySaga);

export const persistor = persistStore(store)