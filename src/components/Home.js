import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


function Home() {
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

            <section id="home" style={{ padding: '2rem', textAlign: 'center', backgroundColor: "tan" }}>
                <div data-aos="zoom-in">
                    <h2>{t('home.welcome')}</h2>
                    <motion.div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '20px',
                            justifyItems: 'center'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {/*<div style={{ border: '1px solid #ddd',*/}
                        {/*    padding: '1rem',*/}
                        {/*    width: '100%',*/}
                        {/*    maxWidth: '220px',*/}
                        {/*    background: 'whitesmoke',*/}
                        {/*    borderRadius: '8px',*/}
                        {/*    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'*/}
                        {/*}}>*/}
                        {/*    {t('home.services')}*/}
                        {/*    <p className={'blogCards'}>{t('home.service1.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.service2.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.service3.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.service4.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.service5.title')}</p>*/}
                        {/*</div>*/}
                        {/*<div style={{ border: '1px solid #ddd',*/}
                        {/*    padding: '1rem',*/}
                        {/*    width: '100%',*/}
                        {/*    maxWidth: '220px',*/}
                        {/*    background: 'whitesmoke',*/}
                        {/*    borderRadius: '8px',*/}
                        {/*    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'*/}
                        {/*}}>*/}
                        {/*    {t('home.blog')}*/}
                        {/*    <p className={'blogCards'}>{t('home.blog1.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.blog1.description')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.blog2.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.blog3.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.blog4.title')}</p>*/}
                        {/*    <p className={'blogCards'}>{t('home.blog5.title')}</p>*/}
                        {/*</div>*/}


                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.blog1.title')}</p>

                            <p className={'blogCards'}>{t('home.blog1.description')}</p>

                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.blog2.title')}</p>

                            <p className={'blogCards'}>{t('home.blog2.description')}</p>

                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.blog3.title')}</p>
                            <img
                                src="/images/DestiWishWheel.gif"
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '1rem'
                                }}
                            />
                            <p className={'blogCards'}>{t('home.blog3.description')}</p>

                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.blog4.title')}</p>
                            <img
                                src="/images/AntZelPathFinder.gif"
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '1rem'
                                }}
                            />
                            <p className={'blogCards'}>{t('home.blog4.description')}</p>

                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.blog5.title')}</p>

                            <p className={'blogCards'}>{t('home.blog5.description')}</p>

                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>

                            <p className={'blogCards'}>{t('home.service1.title')}</p>

                            <p className={'blogCards'}>{t('home.service1.description')}</p>
                        </div>



                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '360px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                            margin: '0 auto'
                        }}>
                            <p className="blogCards" style={{ marginBottom: '1rem', textAlign: 'center' }}>
                                {t('home.service2.title')}
                            </p>

                            <img
                                src="/images/CypressTesting.gif"
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '1rem'
                                }}
                            />

                            <p className="blogCards" style={{ textAlign: 'center' }}>
                                {t('home.service2.description')}
                            </p>
                        </div>



                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>

                            <p className={'blogCards'}>{t('home.service3.title')}</p>

                            <img
                                src="/images/Playstoreready.gif"
                                alt="Preview"
                                style={{
                                    width: '100%',
                                    maxHeight: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                    marginBottom: '1rem'
                                }}
                            />

                            <p className={'blogCards'}>{t('home.service3.description')}</p>



                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.service4.title')}</p>

                            <p className={'blogCards'}>{t('home.service4.description')}</p>


                        </div>

                        <div style={{ border: '1px solid #ddd',
                            padding: '1rem',
                            width: '100%',
                            maxWidth: '220px',
                            background: 'whitesmoke',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}>


                            <p className={'blogCards'}>{t('home.service5.title')}</p>

                            <p className={'blogCards'}>{t('home.service5.description')}</p>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/*/!* BlogGrid für dynamische Blog-Anzeige *!/*/}
            {/*<section id="blogs" style={{ padding: '2rem', textAlign: 'center' }}>*/}
            {/*    <h2>{t('home.blog')}</h2>*/}
            {/*    <BlogGrid />*/}
            {/*</section>*/}
        </>
    );
}

export default Home;
