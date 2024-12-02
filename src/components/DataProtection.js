import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function DataProtection() {
    const { t } = useTranslation();

    return (
        <section id="dataprotection" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{t('dataprotection.title')}</title>
                <meta name="description" content={t('home.description')} />
            </Helmet>
            <div data-aos="zoom-in">
                <h2>{t('dataprotection.welcome')}</h2>
                <motion.div
                    style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                        {t('dataprotection.services')}
                    </div>
                    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
                        {t('dataprotection.blog')}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default DataProtection;
