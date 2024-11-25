import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

function Home() {
    return (
        <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>Home - My Portfolio</title>
                <meta name="description" content="Welcome to my portfolio website. Discover my skills and projects." />
                <meta name="keywords" content="Portfolio, Home, Welcome" />
            </Helmet>
            <div data-aos="zoom-in">
                <h2>Home</h2>
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                        Dienstleistungen
                    </div>
                    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                        Blog
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
