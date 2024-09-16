import * as callAction from '../actions/callAction';

const initState = {
    localStream: null

};

const callReducer = (state = initState, action) => {
    switch (action.type) {
        case callAction.CALL_SET_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.localStream
            };
        default:
            return state;
        
    }

}

export default callReducer;