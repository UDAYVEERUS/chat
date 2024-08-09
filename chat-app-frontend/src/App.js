import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <h1>Chat App</h1>
                <Register />
                <Login />
                <Chat />
            </div>
        </Provider>
    );
};

export default App;
