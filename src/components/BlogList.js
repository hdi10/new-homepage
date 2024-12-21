import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/AuthService';

const BlogList = ({ token }) => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs(token);
                setBlogs(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch blogs');
            }
        };
        getBlogs();
    }, [token]);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Blog List</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
