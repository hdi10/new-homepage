import React, { useState } from 'react';
import { login } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // API-Login-Anfrage
            const data = await login(username, password);

            // Token speichern
            setToken(data.token);
            localStorage.setItem('token', data.token);

            // Erfolgreiche Weiterleitung
            navigate('/dashboard'); // Zielseite nach Login
        } catch (err) {
            console.error(err);
            setError(err.message || 'An error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {/* Fehlermeldung anzeigen */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
