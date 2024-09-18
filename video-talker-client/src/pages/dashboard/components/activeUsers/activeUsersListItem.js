import React from 'react';
import { callToOtherUser } from '../../../../utils/webRTC/webRTCHandler';

const ActiveUserListItem = (props) => {
    const { activeUser } = props;
  
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
