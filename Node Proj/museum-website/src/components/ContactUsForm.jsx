// ContactUsForm.jsx

import React, { useReducer } from 'react';
import { Form, Button } from 'react-bootstrap';
import { formReducer, initialFormData } from '../reducers/contactusreducer'; // Importing the reducer and initial state
import NavBar from './NavBar';
import Footer from './Footer';

function ContactUsForm() {
    const [formData, dispatch] = useReducer(formReducer, initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., send data to backend, clear form, show success message)
        console.log('Form submitted:', formData);
        // Reset form fields after submission (optional)
        dispatch({ type: 'RESET_FORM' });
    };

    return (
        <>
            <NavBar />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContactNo">
                    <Form.Label>Contact No.</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your contact number"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Footer />
        </>
    );
}

export default ContactUsForm;
