const initState = {
    open: false,
    isLeft: false
};

const unit = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_TAIWAN_LEFT':
            return {
                ...state, 
                open: true, 
                isLeft: true
            }
        case 'OPEN_TAIWAN_RIGHT':
            return {
                ...state, 
                open: true,
                isLeft: false
            }
        case 'MOVE_TAIWAN_ORIGIN':
            return {
                ...initState
            }
        default:
            return state
    }
}

export default unit