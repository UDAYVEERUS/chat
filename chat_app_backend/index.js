const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');

// Initialize Express
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:5000',
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chat', require('./routes/chat'));

// Initialize HTTP server and Socket.io
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

// Handle socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('chatMessage', (msg) => {
        io.emit('message', msg);
    });
});

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
