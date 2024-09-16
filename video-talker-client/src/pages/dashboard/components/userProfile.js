import React from 'react';
import './userProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      <div className="profile-info">
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </div>
    </div>
  );
};

export default UserProfile;
