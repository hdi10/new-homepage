import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{t('home.title')}</title>
                <meta name="description" content={t('home.description')} />
            </Helmet>
            <div data-aos="zoom-in">
                <h2>{t('home.welcome')}</h2>
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                        {t('home.services')}
                        {/*<p>IoT-Device Installation und Aktualisierung</p>*/}
                        <p>{t('home.service1.title')}</p>
                        <p>{t('home.service2.title')}</p>
                        <p>{t('home.service3.title')}</p>
                        <p>{t('home.service4.title')}</p>
                        <p>{t('home.service5.title')}</p>
                    </div>
                    <div style={{border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9'}}>
                        {t('home.blog')}
                        <p>{t('home.blog1.title')}</p>
                        <p>{t('home.blog2.title')}</p>
                        <p>{t('home.blog3.title')}</p>
                        <p>{t('home.blog4.title')}</p>
                        <p>{t('home.blog5.title')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Home;
