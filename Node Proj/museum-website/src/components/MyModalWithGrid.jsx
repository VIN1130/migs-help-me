import React from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function MyModalWithGrid({ show, onHide, bookings }) {
    return (
        <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Booking Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row>
                        {bookings.map((booking, index) => (
                            <Col key={index} xs={12} md={4}>
                                <p><strong>Name:</strong> {`${booking.firstName} ${booking.middleName} ${booking.lastName}`}</p>
                                <p><strong>Phone:</strong> {booking.phone}</p>
                                <p><strong>Email:</strong> {booking.email}</p>
                                <p><strong>Date:</strong> {booking.date}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={onHide}>Download Ticket</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModalWithGrid;
