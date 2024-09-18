import React from 'react';
import './incomingCallDialog.css';

const incomingCallDialog = ({ callerUsername }) => {
  const handleAcceptButtonPressed = () => {
    // accept the call
  };

  const handleRejectButtonPressed = () => {
    // accept the call
  };

  return (
    <div className="incoming-call-container">
      <h2>Incoming Call...</h2>
      <p>{callerUsername}</p>
      <div className="button-group">
        <button className="accept-button" onClick={handleAcceptButtonPressed}>
          Accept
        </button>
        <button className="reject-button" onClick={handleRejectButtonPressed}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default incomingCallDialog;

