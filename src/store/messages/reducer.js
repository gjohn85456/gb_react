import { FB_UPDATE_MESSAGE } from './actions';

const data = [];

const fbMessagesReduser = (state = data, action) => {
    switch (action.type) {
        case FB_UPDATE_MESSAGE: {
            console.log('FB_UPDATE_MESSAGE');
            console.log(action.messageList);
            state = action.messageList;
            return state
        }
        default:
            return state
    }
}

export default fbMessagesReduser;