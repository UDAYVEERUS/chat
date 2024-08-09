import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({ username, email, password });
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChange}
                required
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default connect(null, { register })(Register);
