import React from 'react';
import { callToOtherUser } from '../../../../utils/webRTC/webRTCHandler';

const ActiveUserListItem = ({ activeUser }) => {

    const handleListItemPressed = () => {
        callToOtherUser(activeUser);          
    };

    return (
        <div className="user-item" onClick={handleListItemPressed}>
            <span>{activeUser.username || 'Unknown User'}</span>  
        </div>
    );
};

export default ActiveUserListItem;
