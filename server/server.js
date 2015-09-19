import Express from 'express';
import { Server } from 'http';
import IO from 'socket.io';
import { createStore } from 'redux';

const app = new Express();
const http = Server(app);
let io = IO(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('add_message', function(args) {
        io.emit('add_message', args);
    });
})

export default { http: http, app: app };
