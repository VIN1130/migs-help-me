import React from 'react';
import ContactUsForm from '../components/ContactUsForm';
import Card from 'react-bootstrap/Card'; // Import Card from react-bootstrap

function ContactUs() {
    return (
        <div style={{ padding: "70px" }}>
            <Card>
                <Card.Body style={{ width: "100%" }}>
                    <Card.Title>Contact Us</Card.Title>
                    <ContactUsForm />
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContactUs