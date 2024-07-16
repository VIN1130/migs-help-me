import React, { useReducer } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import bookingTicketReducer, { initialFormData } from '../reducers/bookingticketreducer';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; // Import Bootstrap components
import MyModalWithGrid from '../components/MyModalWithGrid';

function BookingTicket() {
    const [state, dispatch] = useReducer(bookingTicketReducer, initialFormData);

    const handleInputChange = (index, e) => {
        dispatch({
            type: 'UPDATE_BOOKING',
            payload: { index, name: e.target.name, value: e.target.value },
        });
    };

    const handleAddPerson = () => {
        dispatch({ type: 'ADD_PERSON' });
    };

    const handleRemovePerson = (index) => {
        dispatch({ type: 'REMOVE_PERSON', index });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and submission logic
        // For demonstration purposes, let's assume the first booking details are used
        const bookingDetails = state.bookings[0];
        console.log('Booking submitted:', bookingDetails);
        dispatch({ type: 'SHOW_MODAL' });
    };

    return (
        <div style={{ padding: '70px' }}> {/* Applying inline style for padding */}
            <NavBar />
            <Container fluid>
                <form onSubmit={handleSubmit}>
                    {state.bookings.map((booking, index) => (
                        <Row key={index} className="mb-4">
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={booking.firstName}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow} // Disable input when modal is shown
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="middleName"
                                        placeholder="Middle Name"
                                        value={booking.middleName}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={booking.lastName}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={booking.phone}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={booking.email}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={booking.date}
                                        onChange={(e) => handleInputChange(index, e)}
                                        disabled={state.modalShow}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} className="text-end">
                                <Button
                                    variant="danger"
                                    onClick={() => handleRemovePerson(index)}
                                    className="me-2 mb-4"
                                    disabled={state.modalShow}
                                >
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    ))}
                    <Row>
                        <Col className="text-center">
                            <Button
                                type="button"
                                onClick={handleAddPerson}
                                className="mb-4 me-2"
                                disabled={state.modalShow}
                            >
                                Add More Person
                            </Button>
                            <Button type="submit" disabled={state.modalShow}>
                                Book Ticket
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Container>
            <Footer />

            <MyModalWithGrid
                show={state.modalShow}
                onHide={() => dispatch({ type: 'HIDE_MODAL' })}
                bookings={state.bookings}
            />
        </div>
    );
}

export default BookingTicket;
