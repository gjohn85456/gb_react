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
        default:
            return state;
    }
}