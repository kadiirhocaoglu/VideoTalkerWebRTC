import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../localVideoView/localVideoView';
import RemoteVideoView from '../remoteVideoView/remoteVideoView';

const directCall = props => {
    const {localStream, remoteStream} = props;
  return (
    <>
        <LocalVideoView  LocalStream ={localStream}   />
        {remoteStream && <RemoteVideoView  RemoteStream = { remoteStream } />}
    </>
  )
}

function mapStoreStateToProps({call}){
    return{
        ...call
    }
}

export default connect(mapStoreStateToProps, null)(directCall);