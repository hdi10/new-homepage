import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { faCode, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

const logos = [
    {
        icon: faMobileAlt,faCode,faLaptopCode,
        titleKey: 'about.logo1.title',
        descriptionKey: 'about.logo1.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "/images/about/Tollcollect-logo.png",
        image2: "images/about/logoentraserv.png",
        image3: "images/about/Stromnetz_Berlin_logo.png",
        image4:"images/about/Android_2023_3D_logo_and_wordmark.png",
        image5:"images/about/Espressif_ESP-WROOM-32_Wi-Fi_&_Bluetooth_Module.jpeg",
        image6:"images/about/Grafana_logo.png",
        image7:"images/about/IOS_wordmark_(2017).png"
    }/*,
    {
        icon: faLaptopCode,
        titleKey: 'about.logo2.title',
        descriptionKey: 'about.logo2.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "/images/about/Tollcollect-logo.png",
        image2: "images/about/logoentraserv.png",
        image3: "images/about/Stromnetz_Berlin_logo.png"
    },
    {
        icon: faMobileAlt,
        titleKey: 'about.logo3.title',
        descriptionKey: 'about.logo3.description',
        repoLink: 'https://github.com/hdi10/TimeZelkulon',
        image1: "/images/about/Tollcollect-logo.png",
        image2: "images/about/logoentraserv.png",
        image3: "images/about/Stromnetz_Berlin_logo.png"
    },*/
];


function About() {
    const { t } = useTranslation();

    return (
        <motion.section
            id="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            style={{padding: '2rem', textAlign: 'center'}}
        >
            <Helmet>
                <title>{t('about.title')}</title>
                <meta name="description" content={t('about.description')}/>
            </Helmet>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h2>{t('about.title')}</h2>
                <h3>{t('about.visionLong')}</h3>

                {/*                <h3>{t('about.description')}</h3>*/}

                <motion.div
                    style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    <div className="logos">
                        {logos.map((logo, index) => (
                            <div className="logo" key={index}
                                 style={{display: 'flex', alignItems: 'center', margin: '10px', gap: '10px'}}>
                                {/* logos */}


                                <img src={logo.image1} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                <img src={logo.image2} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                <img src={logo.image3} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>


                            </div>
                        ))}
                    </div>
                </motion.div>


                <h3>{t('about.experienceLong')}</h3>
                <motion.div
                    style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    <div className="logos">
                        {logos.map((logo, index) => (
                            <div className="logo" key={index}
                                 style={{display: 'flex', alignItems: 'center', margin: '10px', gap: '10px'}}>
                                {/* logos */}


                                <img src={logo.image4} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                <img src={logo.image5} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                <img src={logo.image6} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>

                                <img src={logo.image7} alt={t(logo.titleKey)} style={{
                                    width: '100px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    borderRadius: '1px'
                                }}/>


                            </div>
                        ))}
                    </div>
                </motion.div>
                <h3>{t('about.goals')}</h3>
            </div>


        </motion.section>
    );
}

export default About;
