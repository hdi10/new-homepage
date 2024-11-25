import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from "@mui/material/Button"

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

function Contact() {
    const handleSubmit = (values) => {
        axios.post('https://example.com/contact', values).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <section id="contact" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Contact Me</h2>
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
                        <Button variant='contained' color="primary">Send</Button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

export default Contact;
