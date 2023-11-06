const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Middleware
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3001;
http.listen(port, () => {
  console.log('Server listening on port ' + port);
});
