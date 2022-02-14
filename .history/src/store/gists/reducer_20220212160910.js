import { GET_GISTS_SUCCESS } from "./actions";

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3
}

const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null
}

const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST
            }
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS
            }
        default:
            return state;
    }
}