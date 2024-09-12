import React, { useEffect } from 'react';
import './dashboard.css'; 
const activeUsers = [
  { id: 1, name: "Alice", avatar: "https://via.placeholder.com/50" },
  { id: 2, name: "Bob", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "Charlie", avatar: "https://via.placeholder.com/50" },
];

const dashboard = () => {

  return (
    <div className="video-call-container">
        <div className="user-list">
            <h2>Active Users</h2>
            <ul>
                {activeUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <img src={user.avatar} alt={user.name} className="user-avatar" />
                        <span className="user-name">{user.name}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="video-content">
            <div className="video-container">
                <div className="video-screen main-video">
                    <video autoPlay muted className="main-video-stream"></video>
                </div>
                <div className="video-screen secondary-videos">
                    <div className="video-thumbnail">
                        <video autoPlay muted className="thumbnail-stream"></video>
                    </div>
                    <div className="video-thumbnail">
                        <video autoPlay muted className="thumbnail-stream"></video>
                    </div>
                  
                </div>
            </div>
            <div className="controls">
                <button className="control-button">📞</button>
                <button className="control-button">🎙️</button>
                <button className="control-button">🎥</button>
                <button className="control-button">📢</button>
            </div>
        </div>
    </div>
);
};

export default dashboard;
