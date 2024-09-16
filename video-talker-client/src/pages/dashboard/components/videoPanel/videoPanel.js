import React from 'react';
import './videoPanel.css';

const VideoPanel = () => {
  return (
    <div className="video-panel-container">
      <h2>Video Call</h2>
      <div className="video-content">

        <div className="video-placeholder">
          <p>Your video call will be here.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
