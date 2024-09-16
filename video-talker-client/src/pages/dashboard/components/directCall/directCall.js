import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../localVideoView/localVideoView';
import RemoteVideoView from '../remoteVideoView/remoteVideoView';
import CallingDialog from '../callingDialog/callingDialog';
import CallRejectDialog from '../callRejectDialog/callRejectDialog';

import IncomingCallDialog from '../incomingCallDialog/incomingCallDialog';


const directCall = props => {
    const {localStream, remoteStream} = props;
  return (
    <>
        <LocalVideoView  LocalStream ={localStream}   />
        {remoteStream && <RemoteVideoView  RemoteStream = { remoteStream } />}
        <CallingDialog />
        <CallRejectDialog />
        <IncomingCallDialog />
        
    </>
  )
}

function mapStoreStateToProps({call}){
    return{
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(directCall);