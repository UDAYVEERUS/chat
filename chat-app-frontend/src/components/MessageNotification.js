import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clearNotification } from '../actions/chatActions';

const MessageNotification = ({ notification, clearNotification }) => {
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                clearNotification();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification, clearNotification]);

    return (
        notification && (
            <div style={{ position: 'fixed', top: 10, right: 10, backgroundColor: 'lightgreen', padding: '10px', borderRadius: '5px' }}>
                New message from {notification.sender}: {notification.message}
            </div>
        )
    );
};

export default connect(null, { clearNotification })(MessageNotification);
