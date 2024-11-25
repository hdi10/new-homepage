import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ padding: '2rem', textAlign: 'center' }}
        >
            <div data-aos="fade-up">
                <h2>About Me</h2>
                <p>Write about yourself here...</p>
            </div>
        </motion.section>
    );
}

export default About;
