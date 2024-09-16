import React from 'react';
import './activeUsersList.css';
import ActiveUserListItem from './activeUsersListItem';
import { connect } from 'react-redux';

const ActiveUsersList = ({ activeUsers = [] }) => {  
    return (
        <div className='active-users-list'>
            {activeUsers.length > 0 ? (
                activeUsers.map((activeUser) => (
                    <ActiveUserListItem key={activeUser.socket} activeUser={activeUser} />
                ))
            ) : (
                <p>No active users</p>  
            )}
        </div>
    )
}

const mapStateToProps = ({ dashboard }) => ({
    ...dashboard
});

export default connect(mapStateToProps)(ActiveUsersList);
