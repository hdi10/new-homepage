import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function BlogGrid() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://zelkulonmicroservice-myproject-1df345e27274.herokuapp.com/blogs');
            setBlogs(response.data);
        } catch (err) {
            setError('Fehler beim Abrufen der Blogs: ' + err.message);
        }
    };

    if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
            {blogs.map(blog => (
                <motion.div
                    key={blog.id}
                    style={{
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '20px',
                        width: '250px',
                        background: 'white',
                        transition: 'transform 0.3s',
                        cursor: 'pointer'
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{blog.title}</h3>
                    <p style={{ color: '#666', fontSize: '14px' }}>Artist: {blog.artist}</p>
                    <p style={{ color: '#999', fontSize: '12px' }}>Location: {blog.location}</p>
                    <p style={{ color: '#bbb', fontSize: '12px' }}>{new Date(blog.timestamp).toLocaleString()}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default BlogGrid;
