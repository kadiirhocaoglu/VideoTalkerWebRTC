import React, { useState, useEffect } from 'react';
import './dashboard.css';
import ActiveUsersList from './components/activeUsersList';
import UserProfile from './components/userProfile';
import VideoPanel from './components/videoPanel';
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
          <DirectCall />
      
      </div>
    );
  };
  
export default Dashboard;
