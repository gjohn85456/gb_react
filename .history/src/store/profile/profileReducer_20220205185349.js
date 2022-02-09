import { CHANGE_NAME } from "./chatActions";

const initionalSate = {
    showName: true,
    name: 'Jane'
};

const profileReducer = (state = initionalSate, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                NAME: action.playload
            }
        default:
            return state
    }
}

export default profileReducer