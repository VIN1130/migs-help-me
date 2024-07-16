import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; // Import Button from react-bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navBarReducer from '../reducers/navbarreducer';
import './NavBar.modules.css';

function NavBar() {
    const initialState = { searchQuery: '' };

    const [state, dispatch] = useReducer(navBarReducer, initialState);

    const handleSearchChange = (e) => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search query:', state.searchQuery);
    };

    return (
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary" style={{ width: '100%', zIndex: 1000 }}>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Mark Museum</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Book a Ticket</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={handleSearchSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={state.searchQuery}
                            onChange={handleSearchChange}
                        />
                        {/* Apply Button style to search button */}
                        <Button variant="primary" type="submit" className="search-button">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
