import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Home</h2>
            <motion.div
                style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                    Dienstleistung
                </div>
                <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                    Blog
                </div>
            </motion.div>
        </section>
    );
}

export default Home;
