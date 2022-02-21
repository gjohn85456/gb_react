import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist'

import profileReducer from "./profile/profileReducer";


import gistsReducer from "./gists/reducer";
import { middleware, initTrackerWithFB, getDataFromFB } from './middleware'
import mySaga from "./sagas";
import thunk from 'redux-thunk'

import fbChatsReducer from './chats/reducer1'
import fbMessagesReduser from "./messages/reducer1";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


/*Отключили на lesson9
const persistConfig = {
    key: 'root',
    storage
}
*/
const allReducers = combineReducers({
    fbChats: fbChatsReducer,
    fbMessages: fbMessagesReduser,
    profile: profileReducer,
    gists: gistsReducer
});

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


// export const store = createStore(allReducers, composeEnhancers(applyMiddleware(initTrackerWithFB)));

/*Отключили на lesson9
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
*/

sagaMiddleware.run(mySaga);

//Отключаем Persist lesson9, чтобы не конфликтовал
//с данными приходящими с БД firebase, можно конечно под настроить конфигурацию persist

//но ХЗ как этол сделать
export const persistor = persistStore(store)