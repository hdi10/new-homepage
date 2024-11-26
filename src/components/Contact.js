import React from 'react';
import { Helmet } from 'react-helmet';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function Contact() {
    const { t } = useTranslation();

    const handleSubmit = (values) => {
        axios.post('https://example.com/contact', values).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{t('contact.title')}</title>
                <meta name="description" content={t('contact.description')} />
                <meta name="keywords" content="Contact, Portfolio, Get in Touch" />
            </Helmet>
            <div data-aos="fade-up">
                <h2>{t('contact.title')}</h2>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <div>
                                <Field name="name" placeholder={t('contact.placeholder.name')} />
                                <ErrorMessage name="name" component="div" />
                            </div>
                            <div>
                                <Field name="email" type="email" placeholder={t('contact.placeholder.email')} />
                                <ErrorMessage name="email" component="div" />
                            </div>
                            <div>
                                <Field name="message" as="textarea" placeholder={t('contact.placeholder.message')} />
                                <ErrorMessage name="message" component="div" />
                            </div>
                            <Button variant="contained" color="primary">
                                {t('contact.send')}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default Contact;
