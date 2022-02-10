import { delay, put } from 'redux-saga/effects'
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/actions'

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.chatId, action.message));
    if (action.message.author !== 'robot') {
        const botMessage = { text: 'Saga says hello', author: 'bender' }
        yield delay(2000);
        yield put(addMessage(action.chatId, botMessage));
    }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga())
}