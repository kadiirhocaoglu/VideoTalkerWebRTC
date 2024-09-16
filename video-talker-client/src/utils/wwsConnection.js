import SocketClient from 'socket.io-client'
import store from '../store/store'
import * as dashboardActions from '../store/actions/dashboardActions'
const SERVER = 'http://localhost:5000';

const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}
let socket;

export const ConnectionWWS = ()=>{
    socket = SocketClient(SERVER);
    socket.on('connection',()=>{
        console.log("Succesfully connection");
        console.log(socket.id);
    });

    socket.on('broadcast', (data) => {
        console.log("broadcast çalıştı");
        handleBroadcastEvents(data); 
    });
}

export const registerNewUser = (username) =>{
    if (socket != null){
        socket.emit('register-new-user', {
            username: username,
            socketId: socket.id
        }
        );
    }
}

export const handleBroadcastEvents = (data) => {
    switch (data.eventName) {
        case broadcastEventTypes.ACTIVE_USERS:
        console.log(data.activeUsers)
          const activeUsers = data.activeUsers.filter(activeUser => activeUser.socketId !== socket.id);
        console.log(activeUsers);
          store.dispatch(dashboardActions.setActiveUsers(activeUsers));
          break;
        default:
          break;
      }
};

