/*
import axios from 'axios';

const API_URL = 'https://authmicroservice-myproject-66551bc0d4a5.herokuapp.com'; // URL zu deinem Backend

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, { username, password });
        return response.data; // Erwarte ein Token oder User-Objekt
    } catch (error) {
        throw error.response.data || 'Login failed';
    }
};

export const fetchBlogs = async (token) => {
    try {
        const response = await axios.get('https://zelkulonmicroservice-myproject-1df345e27274.herokuapp.com/bloglists', {
            headers: { Authorization: `Random Token ${token}` },
        });
        return response.data;
    } catch (error) {
        throw error.response.data || 'Fetching blogs failed';
    }
};
*/
import axios from 'axios';

const API_URL = 'https://apigateway-myproject-1b6db96b72fe.herokuapp.com/auth';

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                userId: username, // Name an Backend-Format anpassen
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Wichtig für Cookies/Sessions
            }
        );
        return response.data; // Erwartet, dass das Backend ein Token zurückgibt
    } catch (error) {
        console.error('Login Error:', error);
        throw new Error('Login fehlgeschlagen. Überprüfe deine Eingaben.');
    }
};
