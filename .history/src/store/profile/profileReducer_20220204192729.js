const initionalSate = {
    showName: true,
    name: 'Jane'
};

const profileReducer = (state = initionalSate, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer