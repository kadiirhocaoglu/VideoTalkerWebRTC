import React, { useState, useEffect } from 'react';
import './dashboard.css';
import ActiveUsersList from './components/activeUsers/activeUsersList';
import UserProfile from './components/userProfile/userProfile';
import DirectCall from './components/directCall/directCall';
import * as webRTCHandler from '../../utils/webRTC/webRTCHandler'

const Dashboard = () => {
    
    useEffect(() => {
      webRTCHandler.getLocalStream()
    }, []);

    return (
      <div className="dashboard">
        <div className= 'sidebar visible'>
          <ActiveUsersList />
          <UserProfile />
        </div>
        <div className="video-panel">
          <DirectCall />
        </div>
      </div>
    );
  };
  
export default Dashboard;
