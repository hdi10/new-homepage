import React, {useEffect, useState} from 'react';
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
    {
        icon: faLaptopCode,
        titleKey: 'portfolio.project4.title',
        descriptionKey: 'portfolio.project4.description',
        repoLink: 'https://github.com/hdi10/RandomChoiceHelperApplicationApp?tab=readme-ov-file',
        image1: "images/RandomChoiceHelperApp/RandomChoice1.png",
        image2: "images/RandomChoiceHelperApp/RandomChoice2.png",
        image3: "images/RandomChoiceHelperApp/RandomChoice3.png"
    },
    {
        icon: faCode,
        titleKey: 'portfolio.project5.title',
        descriptionKey: 'portfolio.project5.description',
        repoLink: 'https://github.com/hdi10/new-homepage',
        image1: "images/NewHomepage/website1.png",
        image2: "images/NewHomepage/website2.png",
        image3: "images/NewHomepage/website3.png"

    }

];

function Portfolio() {
    const { t } = useTranslation();
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
        // Überprüfe, ob die Cookie-Einwilligung bereits vorhanden ist
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowCookieBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowCookieBanner(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowCookieBanner(false);
    };


    return (
        <motion.section
            id="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            style={{padding: '2rem', textAlign: 'center', backgroundColor: 'tan'}}
        >
            <Helmet>
                <title>{t('portfolio.title')}</title>
                <meta name="description" content={t('portfolio.description')}/>
            </Helmet>

            {/* Cookie-Banner */}
            {showCookieBanner && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        width: '100%',
                        background: '#f3f3f3',
                        padding: '1rem',
                        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <p style={{margin: 0}}>
                        {t('cookie.message')} <a href="/data_protection">{t('cookie.learnMore')}</a>
                    </p>
                    <div>
                        <button
                            onClick={handleAcceptCookies}
                            style={{
                                marginLeft: '10px',
                                padding: '0.5rem 1rem',
                                background: '#4caf50',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {t('cookie.accept')}
                        </button>
                        <button
                            onClick={handleRejectCookies}
                            style={{
                                marginLeft: '10px',
                                padding: '0.5rem 1rem',
                                background: '#f44336',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            {t('cookie.reject')}
                        </button>
                    </div>
                </div>
            )}

            <div data-aos="flip-right">

                <h2 style={{padding: '2rem', textAlign: 'center'}}>{t('portfolio.title')}</h2>
                {/* <p>{t('portfolio.description')}</p>*/}
                <motion.div
                    style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1.15}}
                >


                    <div className="projects" >
                        {projects.map((project, index) => (
                            <div className="project" key={index}
                                 style={{ border: '1px solid #ddd', padding: '1rem', background: '#ffdfbf' ,display: 'flex', alignItems: 'center', gap: '10px'}}>
                                {/* Projektbild */}
                                <img src={project.image1} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>
                                <img src={project.image2} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>
                                <img src={project.image3} alt={t(project.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                {/* Projektinfo */}
                                <div className="project" key={index} style={{textAlign: 'center', margin: '10px'}}>
                                    <FontAwesomeIcon icon={project.icon} size="3x"/>
                                    <h3>{t(project.titleKey)}</h3>
                                    <p>{t(project.descriptionKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}


export default Portfolio;
