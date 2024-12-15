import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Axios importieren

function Home() {
    const { t } = useTranslation();
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const [blogs, setBlogs] = useState([]); // Blogs-Status hinzufügen
    const [error, setError] = useState(null); // Fehlerstatus

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

    // Blogs von Backend abrufen
    const fetchBlogs = async () => {
        try {
            const response = await axios.get('https://modules-3acf648b9e01.herokuapp.com//blogs/blogs'); // URL deines Backends
            setBlogs(response.data); // Blogs in den Status speichern
            setError(null); // Fehler zurücksetzen, falls vorher ein Fehler auftrat
        } catch (err) {
            setError(err.message); // Fehlerstatus setzen
        }
    };

    return (
        <>
            <Helmet>
                <title>{t('home.title')}</title>
                <meta name="description" content={t('home.description')} />
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
                    <p style={{ margin: 0 }}>
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

            <section id="home" style={{ padding: '2rem', textAlign: 'center' }}>
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
                            <p>{t('home.service1.title')}</p>
                            <p>{t('home.service2.title')}</p>
                            <p>{t('home.service3.title')}</p>
                            <p>{t('home.service4.title')}</p>
                            <p>{t('home.service5.title')}</p>
                        </div>
                        <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px', background: '#f9f9f9' }}>
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

            {/* Button und Blog-Anzeige */}
            <section id="blogs" style={{ padding: '2rem', textAlign: 'center' }}>
                <button
                    onClick={fetchBlogs}
                    style={{
                        padding: '0.5rem 1rem',
                        background: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    {t('home.fetchBlogs')}
                </button>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                {blogs.length > 0 ? (
                    <div style={{ marginTop: '20px' }}>
                        {blogs.map((blog) => (
                            <div key={blog.id} style={{border: '1px solid #ddd', margin: '10px', padding: '10px'}}>
                                <h3>{blog.title}</h3>
                                <p>{blog.id}</p>

                                <p>{blog.artist}</p>
                                <p>{blog.location}</p>
                                <p>{blog.timestamp}</p>


                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ marginTop: '20px' }}>{t('home.noBlogs')}</p>
                )}
            </section>
        </>
    );
}

export default Home;
