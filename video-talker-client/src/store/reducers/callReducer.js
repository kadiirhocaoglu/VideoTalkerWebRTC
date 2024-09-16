import * as callAction from '../actions/callAction';

const initState = {
    localStream: null,
    callState: callAction.callStates.CALL_UNAVAILABLE

};

const callReducer = (state = initState, action) => {
    switch (action.type) {
        case callAction.CALL_SET_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.localStream
            };
            case callAction.CALL_SET_CALL_STATE:
                return {
                    ...state,
                    callState: action.callState
                };
        default:
            return state;
        
    }

}

export default callReducer;