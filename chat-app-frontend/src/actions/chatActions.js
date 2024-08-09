import axios from 'axios';
import socketIOClient from 'socket.io-client';

let socket;

export const initializeSocket = () => dispatch => {
    socket = socketIOClient('http://localhost:5000');
    socket.on('message', (msg) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: msg,
        });
    });
};

export const sendMessage = (receiverId, message) => async dispatch => {
    try {
        const res = await axios.post('/api/chat/send', { receiverId, message });

        socket.emit('chatMessage', res.data);
    } catch (err) {
        console.error(err.message);
    }
};

export const getMessages = () => async dispatch => {
    try {
        const res = await axios.get('/api/chat/messages');

        dispatch({
            type: 'GET_MESSAGES',
            payload: res.data,
        });
    } catch (err) {
        console.error(err.message);
    }
};

export const clearNotification = () => dispatch => {
    dispatch({ type: 'CLEAR_NOTIFICATION' });
};
