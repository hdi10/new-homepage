import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        icon: faCode,
        titleKey: 'portfolio.project1.title',
        descriptionKey: 'portfolio.project1.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "images/TimeZelkulon/day1.png",
        image2: "images/TimeZelkulon/day2.png",
        image3: "images/TimeZelkulon/day3.png"
    },
    {
        icon: faLaptopCode,
        titleKey: 'portfolio.project2.title',
        descriptionKey: 'portfolio.project2.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "images/DestiWish/homescreen_desti.png",
        image2: "images/DestiWish/wheel2.png",
        image3: "images/DestiWish/endwheel.png"
    },
    {
        icon: faMobileAlt,
        titleKey: 'portfolio.project3.title',
        descriptionKey: 'portfolio.project3.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "images/AntZel/gps.png",
        image2: "images/AntZel/standort1.png",
        image3: "images/AntZel/standort2.png"
    },
];

function Portfolio() {
    const { t } = useTranslation();

    return (
        <section id="portfolio" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{t('portfolio.title')}</title>
                <meta name="description" content={t('portfolio.description')} />
            </Helmet>
            <div data-aos="flip-right">
                <h2>{t('portfolio.title')}</h2>
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="projects">
                        {projects.map((project, index) => (
                            <div className="project" key={index}
                                 style={{display: 'flex', alignItems: 'center', margin: '10px', gap: '10px'}}>
                                {/* Projektbild */}
                                <img src={project.image1} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '1px'
                                }}/>
                                <img src={project.image2} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '1px'
                                }}/>
                                <img src={project.image3} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '1px'
                                }}/>

                                {/* Projektinfo */}
                                <div className="project" key={index} style={{textAlign: 'center', margin: '10px'}}>
                                    <FontAwesomeIcon icon={project.icon} size="2x"/>
                                    <h3>{t(project.titleKey)}</h3>
                                    <p>{t(project.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


export default Portfolio;
