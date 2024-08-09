import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './index.css';

const container = document.getElementById('root'); // Get the root element

const root = ReactDOM.createRoot(container); // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode> 
);