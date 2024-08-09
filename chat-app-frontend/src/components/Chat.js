import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage, getMessages, initializeSocket, clearNotification } from '../actions/chatActions';
import MessageNotification from './MessageNotification';

const Chat = ({ chat: { messages, notification }, sendMessage, getMessages, initializeSocket, clearNotification }) => {
    const [message, setMessage] = useState('');
    const [receiverId, setReceiverId] = useState('');

    useEffect(() => {
        initializeSocket();
        getMessages();

        return () => {
            clearNotification();
        };
    }, [initializeSocket, getMessages, clearNotification]);

    const onSubmit = e => {
        e.preventDefault();
        sendMessage(receiverId, message);
        setMessage('');
    };

    return (
        <div>
            <MessageNotification notification={notification} />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Receiver ID"
                    value={receiverId}
                    onChange={e => setReceiverId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                    />
                    <button type="submit">Send</button>
                </form>
                <div>
                    <h2>Messages</h2>
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                <strong>{msg.sender}</strong>: {msg.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
    
    const mapStateToProps = state => ({
        chat: state.chat,
    });
    
    export default connect(mapStateToProps, { sendMessage, getMessages, initializeSocket, clearNotification })(Chat);
    
