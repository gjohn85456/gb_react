import { delay, put } from 'redux-saga/effects'
import { addMessage } from './messages/actions'

function* onAddMessageWithSaga(action) {
    yield put(addMessage(action.chatId, action.message));
    if (action.message.author !== 'robot') {
        const botMessage = { text: 'Saga says hello', author: 'bender' }
        yield delay(2000);
        yield put(addMessage(action.chatId, botMessage));
    }
}