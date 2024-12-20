import React, {useEffect, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});



function Contact() {
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


    const handleSubmit = (values, { resetForm }) => {
        emailjs.send(
            'service_5zbeihs', // Ersetzen Sie durch Ihre Service-ID
            'template_sgpluvk', // Ersetzen Sie durch Ihre Template-ID
            values,
            'TqSCoMVDAU0xXIj7N' // Ersetzen Sie durch Ihren API-Schlüssel
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
        <section style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Contact Us</h2>

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

            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div>
                            <Field name="name" placeholder="Your Name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div>
                            <Field name="email" type="email" placeholder="Your Email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <Field name="message" as="textarea" placeholder="Your Message" />
                            <ErrorMessage name="message" component="div" />
                        </div>
                        <Button type="submit" variant="contained" color="primary">
                            Send
                        </Button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

export default Contact;
