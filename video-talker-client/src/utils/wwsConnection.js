import SocketClient from 'socket.io-client'

const SERVER = 'http://localhost:5000';

let socket;

export const ConnectionWWS = ()=>{
    socket = SocketClient(SERVER);
    socket.on('connection',()=>{
        console.log("Succesfully connection");
        console.log(socket.id);
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

export const getActiveUsers = () => {
    socket.on('broadcast', (data) => {
        console.log(data);
    });
} 