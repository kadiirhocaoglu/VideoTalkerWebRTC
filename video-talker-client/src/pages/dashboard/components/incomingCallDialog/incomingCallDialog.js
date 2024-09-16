import React from 'react';
import './incomingCallDialog.css';

const incomingCallDialog = ({ onAccept, onReject }) => {
  return (
    <div className="incoming-call-container">
      <h2>Incoming Call...</h2>
      <div className="button-group">
        <button className="accept-button" onClick={onAccept}>
          Accept
        </button>
        <button className="reject-button" onClick={onReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default incomingCallDialog;

