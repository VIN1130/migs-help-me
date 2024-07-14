import React, { useReducer } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import bookingTicketReducer from '../reducers/bookingticketreducer';
import { Box, Input, Button, Flex } from '@chakra-ui/react';

function BookingTicket() {
    const initialState = {
        bookings: [{ firstName: '', middleName: '', lastName: '', phone: '', email: '', date: '' }],
    };

    const [state, dispatch] = useReducer(bookingTicketReducer, initialState);

    const handleInputChange = (index, e) => {
        dispatch({
            type: 'UPDATE_BOOKING',
            payload: { index, name: e.target.name, value: e.target.value },
        });
    };

    const handleAddPerson = () => {
        dispatch({ type: 'ADD_PERSON' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation and submission logic
    };

    return (
        <div>
            <NavBar />
            <Box p={4}>
                <form onSubmit={handleSubmit}>
                    {state.bookings.map((booking, index) => (
                        <Box key={index} mb={4}>
                            <Input
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                value={booking.firstName}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                            <Input
                                name="middleName"
                                type="text"
                                placeholder="Middle Name"
                                value={booking.middleName}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                            <Input
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                value={booking.lastName}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                            <Input
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                value={booking.phone}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={booking.email}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                            <Input
                                name="date"
                                type="date"
                                value={booking.date}
                                onChange={(e) => handleInputChange(index, e)}
                                mb={2}
                            />
                        </Box>
                    ))}
                    <Button type="button" onClick={handleAddPerson} mb={4}>Add More Person</Button>
                    <Button type="submit">Book Ticket</Button>
                </form>
            </Box>
            <Footer />
        </div>
    );
}

export default BookingTicket;
