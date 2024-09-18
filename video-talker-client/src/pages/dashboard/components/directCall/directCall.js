import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../localVideoView/localVideoView';
import RemoteVideoView from '../remoteVideoView/remoteVideoView';
import CallingDialog from '../callingDialog/callingDialog';
import CallRejectDialog from '../callRejectDialog/callRejectDialog';
import IncomingCallDialog from '../incomingCallDialog/incomingCallDialog';
import { callStates } from '../../../../store/actions/callAction';

const directCall = props => {
    const {localStream, remoteStream, callState, callerUsername, callingDialogVisible} = props;
  return (
    <>
        <LocalVideoView  LocalStream ={localStream}   />
        {remoteStream && <RemoteVideoView  RemoteStream = { remoteStream } />}
        {callState === callStates.CALL_REQUESTED && <CallingDialog />}
        {/* <CallRejectDialog /> */}
        {callingDialogVisible && <IncomingCallDialog callerUsername = {callerUsername} />}
        
    </>
  )
}

function mapStoreStateToProps({call}){
    return{
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(directCall);