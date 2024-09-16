import React from 'react';

const ActiveUserListItem = ({ activeUser }) => {

    const handleListItemPressed = () => {
        console.log(`Calling ${activeUser.username}`);
    };

    return (
        <div className="user-item" onClick={handleListItemPressed}>
            <span>{activeUser.username || 'Unknown User'}</span>  
        </div>
    );
};

export default ActiveUserListItem;
