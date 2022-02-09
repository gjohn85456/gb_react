import { CHANGE_NAME } from "./chatActions";

const initionalSate = {
    showName: true,
    name: 'Jane'
};

const profileReducer = (state = initionalSate, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            console.log('action --=--', action);
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer