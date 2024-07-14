import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/booking">Book a Ticket</Link>
            <input type="text" placeholder="Search..." />
        </nav>
    );
}

export default NavBar;
