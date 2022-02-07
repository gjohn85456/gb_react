const initionalSate = {
    showName: true,
    name: 'Jane'
};

const profileReducer = (state = initionalSate, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return {
                ...state
            }
        default:
            return sate
    }
} 