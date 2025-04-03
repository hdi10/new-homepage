import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function Pricing() {
    const { t } = useTranslation();
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
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

    const handleSubmit = (values, { resetForm }) => {
        emailjs.send(
            'service_5zbeihs',
            'template_sgpluvk',
            values,
            'TqSCoMVDAU0xXIj7N'
        )
            .then(() => {
                alert('Email sent successfully!');
                resetForm();
            })
            .catch(() => {
                alert('Failed to send email.');
            });
    };

    return (
        <section style={{ padding: '2rem', backgroundColor: 'tan', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                    {t('pricing.heading')}
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
                    {t('pricing.description')}
                </p>

                <Formik
                    initialValues={{ toggle1: false, toggle2: false, toggle3: false, toggle0: false, name: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values }) => (
                        <Form className="space-y-6">
                            <div className="space-y-4 mb-6">
                                {[
                                    {
                                        name: 'toggle1',
                                        title: t('pricing.toggle1.title'),
                                        desc: t('pricing.toggle1.desc')
                                    },
                                    {
                                        name: 'toggle2',
                                        title: t('pricing.toggle2.title'),
                                        desc: t('pricing.toggle2.desc')
                                    },
                                    {
                                        name: 'toggle3',
                                        title: t('pricing.toggle3.title'),
                                        desc: t('pricing.toggle3.desc')
                                    },
                                    {
                                        name: 'toggle0',
                                        title: t('pricing.toggle0.title'),
                                        desc: t('pricing.toggle0.desc')
                                    },
                                ].map(option => (
                                    <div key={option.name} style={{
                                        marginBottom: '1rem',
                                        padding: '1rem',
                                        backgroundColor: 'white',
                                        borderRadius: '59px',
                                        boxShadow: '0 1px 6px rgba(0,0,0,0.1)'
                                    }}>
                                        <label style={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Field type="checkbox" name={option.name} style={{ marginRight: '0.50rem', marginTop: '4px' }} />
                                            <div>
                                                <div style={{ fontWeight: '900', fontSize: '0.85rem' }}>{option.title}</div>
                                                <p style={{ fontSize: '1rem', color: '#666', marginTop: '0.55rem' }}>{option.desc}</p>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div>
                                    <Field name="name" placeholder="Ihr Name" style={inputStyle} />
                                    <ErrorMessage name="name" component="div" style={errorStyle} />
                                </div>
                                <div>
                                    <Field name="email" type="email" placeholder="Ihre E-Mail" style={inputStyle} />
                                    <ErrorMessage name="email" component="div" style={errorStyle} />
                                </div>
                                <div>
                                    <Field name="message" as="textarea" placeholder="Ihre Nachricht" rows="4" style={{ ...inputStyle, resize: 'vertical' }} />
                                    <ErrorMessage name="message" component="div" style={errorStyle} />
                                </div>
                            </div>

                            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Anfrage absenden
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* Cookie-Banner */}
            {showCookieBanner && (
                <div style={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    background: '#f3f3f3',
                    padding: '1rem',
                    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <p style={{ margin: 0 }}>
                        {t('cookie.message')} <a href="/data_protection">{t('cookie.learnMore')}</a>
                    </p>
                    <div>
                        <button onClick={handleAcceptCookies} style={cookieButtonStyle('#4caf50')}>{t('cookie.accept')}</button>
                        <button onClick={handleRejectCookies} style={cookieButtonStyle('#f44336')}>{t('cookie.reject')}</button>
                    </div>
                </div>
            )}
        </section>
    );
}

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
};

const errorStyle = {
    color: '#e53935',
    fontSize: '0.875rem',
    marginTop: '0.25rem'
};

const cookieButtonStyle = (background) => ({
    marginLeft: '10px',
    padding: '0.5rem 1rem',
    background,
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
});

export default Pricing;
