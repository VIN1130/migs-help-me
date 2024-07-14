import React, { useReducer } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import bookingTicketReducer from '../reducers/bookingticketreducer.js';

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
            <form onSubmit={handleSubmit}>
                {state.bookings.map((booking, index) => (
                    <div key={index}>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={booking.firstName}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                            name="middleName"
                            type="text"
                            placeholder="Middle Name"
                            value={booking.middleName}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={booking.lastName}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={booking.phone}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={booking.email}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                        <input
                            name="date"
                            type="date"
                            value={booking.date}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddPerson}>Add More Person</button>
                <button type="submit">Book Ticket</button>
            </form>
            <Footer />
        </div>
    );
}

export default BookingTicket;
