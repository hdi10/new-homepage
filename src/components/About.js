import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>About Me - Learn More</title>
                <meta name="description" content="Learn more about my journey and expertise in software development." />
                <meta name="keywords" content="About Me, Portfolio, Software Developer" />
            </Helmet>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h2>About Me</h2>
                <p>Write about yourself here...</p>
            </div>
        </motion.section>
    );
}

export default About;
