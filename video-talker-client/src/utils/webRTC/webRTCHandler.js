import { callStates, setCallState, setLocalStream } from "../../store/actions/callAction";
import store from '../../store/store';

const defaultConstraints = {
    video: true, 
    audio: true  
};

export const getLocalStream = () => { // MARK: Burası bir promise döndürür promise, resolve ise then'e girer , reject ise catch e düşer
    navigator.mediaDevices.getUserMedia(defaultConstraints)
    .then(stream => {
        store.dispatch(setLocalStream(stream));
        store.dispatch(setCallState(callStates.CALL_AVAILABLE));
    })
    .catch(err => {
        console.log('Error occurred when trying to access local stream');
        console.log(err);
    });
};
