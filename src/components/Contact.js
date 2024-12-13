import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function Contact() {
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
