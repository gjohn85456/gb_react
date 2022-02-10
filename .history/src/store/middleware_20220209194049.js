import { ADD_MESSAGE } from "./messages/actions";

const middleware = store => next => action => {
    if (action.type === ADD_MESSAGE && action.message.author !== 'bender') {
        const bederMessage = { text: 'i am a robot', author: 'bender' }
        setTimeout(() => {
            console.log('timeout');
        }, 1000);
        return next(action);
    }

};

export default middleware
