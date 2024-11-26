import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();

    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ padding: '2rem', textAlign: 'center' }}
        >
            <Helmet>
                <title>{t('about.title')}</title>
                <meta name="description" content={t('about.description')} />
            </Helmet>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <h2>{t('about.title')}</h2>
                <p>{t('about.description')}</p>
                <h3>{t('about.vision')}</h3>
                <h3>{t('about.experience')}</h3>
                <h3>{t('about.goals')}</h3>
            </div>
        </motion.section>
    );
}

export default About;
