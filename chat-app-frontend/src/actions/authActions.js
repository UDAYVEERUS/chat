import axios from 'axios';

export const register = ({ username, email, password }) => async dispatch => {
    try {
        const res = await axios.post('/api/auth/register', { username, email, password });

        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await axios.post('/api/auth/login', { email, password });

        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: 'USER_LOADED',
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
        });
    }
};

export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
};
