import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'

import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/reducer"
import messagesReducer from "./messages/reducer";
import gistsReducer from "./gists/reducer";
import middleware from './middleware'
import mySaga from "./sagas";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()


/*Отключили на lesson9
const persistConfig = {
    key: 'root',
    storage
}
*/
const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer
})

/*Отключили на lesson9
const persistedReducer = persistReducer(persistConfig, allReducers);
*/

//Реализация redux без middleware
// export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__());

//Реализаиця с middleware
//export const store = createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));

//Реализация до использования redux-persist
//export const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));


export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

/*Отключили на lesson9
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
*/

sagaMiddleware.run(mySaga);

//Отключаем Persist lesson9, чтобы не конфликтовал
//с данными приходящими с БД firebase, можно конечно под настроить конфигурацию persist
//но ХЗ как этол сделать
//export const persistor = persistStore(store)