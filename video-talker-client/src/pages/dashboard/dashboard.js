import React, { useState, useEffect } from 'react';
import './dashboard.css';
import ActiveUsersList from './components/activeUsers/activeUsersList';
import UserProfile from './components/userProfile/userProfile';
import VideoPanel from './components/videoPanel/videoPanel';
import DirectCall from './components/directCall/directCall';
import * as webRTCHandler from '../../utils/webRTC/webRTCHandler'

const Dashboard = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    
    useEffect(() => {
      webRTCHandler.getLocalStream()
    }, []);


    useEffect(() => {
      const handleResize = () => {
        setSidebarVisible(window.innerWidth > 768);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <div className="dashboard">
        <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
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
