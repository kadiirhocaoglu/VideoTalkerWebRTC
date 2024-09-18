const express = require('express');
const socket = require('socket.io');

const PORT = 5000;

const app = express();

///MARK: Express app init port 5000
const server = app.listen(PORT, () => { 
    console.log(`server listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

///MARK: Socket start
const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

let peers = [];
const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
}

///MARK: work when user connection server 
io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log('new user connected');
    console.log(socket.id);

    ///MARK: saves to the peers list when the user registers
    socket.on('register-new-user', (data) => { 
        peers.push({
            username: data.username,
            socketId: socket.id  
        });
        console.log('register new user');
        console.log(peers);

        io.emit('broadcast', {
            eventName: broadcastEventTypes.ACTIVE_USERS,
            activeUsers: peers
        });
    });

    ///MARK: user disconnect
    socket.on('disconnect', () => {
        console.log("user disconnected");
        peers = peers.filter(x => x.socketId !== socket.id); 
        console.log(peers);

        io.emit('broadcast', {
            eventName: broadcastEventTypes.ACTIVE_USERS,
            activeUsers: peers
        });
    });

    
    socket.on('pre-offer', (data) => {
        console.log("");
        io.to(data.callee.socketId).emit('pre-offer', {
            callerUsername: data.callerUsername,
            callerSocketId: socket.id
        })
    })

});
