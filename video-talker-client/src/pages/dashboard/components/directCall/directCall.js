import React from 'react';
import { connect } from 'react-redux';
import LocalVideoView from '../localVideoView/localVideoView';
import RemoteVideoView from '../remoteVideoView/remoteVideoView';
import CallingDialog from '../callingDialog/callingDialog';
import CallRejectDialog from '../callRejectDialog/callRejectDialog';
import IncomingCallDialog from '../incomingCallDialog/incomingCallDialog';
import { callStates, setCallRejected } from '../../../../store/actions/callAction';


const DirectCall = (props) => {
  const {
    localStream,
    remoteStream,
    callState,
    callerUsername,
    callingDialogVisible,
    callRejected,
    hideCallRejectedDialog
  } = props;

  return (
    <>
      <LocalVideoView LocalStream={localStream} />
      {remoteStream && <RemoteVideoView RemoteStream={remoteStream} />}
      {callRejected.rejected && <CallRejectDialog
        reason={callRejected.reason}
        hideCallRejectedDialog={hideCallRejectedDialog}
      />}
      {callState === callStates.CALL_REQUESTED && <IncomingCallDialog callerUsername={callerUsername} />}
      {callingDialogVisible && <CallingDialog />}
    </>
  );
};

function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}

function mapDispatchToProps (dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) => dispatch(setCallRejected(callRejectedDetails))
  };
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
