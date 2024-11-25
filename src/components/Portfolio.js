import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const projects = [
    {
        icon: faCode,
        title: 'Web Development',
        description: 'Modern and responsive web designs built using React and Material-UI.',
    },
    {
        icon: faLaptopCode,
        title: 'Software Development',
        description: 'Custom software solutions crafted with Java and Spring Boot.',
    },
    {
        icon: faMobileAlt,
        title: 'Mobile Apps',
        description: 'Interactive and user-friendly mobile applications for iOS and Android.',
    },
];

function Portfolio() {
    return (
        <section id="portfolio" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>Portfolio - My Projects</title>
                <meta name="description" content="Explore my portfolio, showcasing web development, mobile apps, and more." />
                <meta name="keywords" content="Portfolio, Projects, Web Development, Mobile Apps" />
            </Helmet>
            <div data-aos="flip-right">
                <h2>Portfolio</h2>
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="projects">
                        {projects.map((project, index) => (
                            <div className="project" key={index} style={{ textAlign: 'center', margin: '10px' }}>
                                <FontAwesomeIcon icon={project.icon} size="3x" />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Portfolio;
