import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Input, IconButton, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import navBarReducer from '../reducers/navbarreducer';

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
        <Box bgGradient="linear(to-r, lightblue, lightorange)" p={4}>
            <Flex as="nav" align="center" justify="space-between" wrap="wrap">
                <Box>
                    <Link to="/">Home</Link>
                    <Link to="/about" ml={4}>About</Link>
                    <Link to="/contact" ml={4}>Contact</Link>
                    <Link to="/booking" ml={4}>Book a Ticket</Link>
                </Box>
                <Box as="form" onSubmit={handleSearchSubmit}>
                    <InputGroup>
                        <Input
                            type="text"
                            placeholder="Search..."
                            value={state.searchQuery}
                            onChange={handleSearchChange}
                        />
                        <InputRightElement>
                            <IconButton
                                type="submit"
                                icon={<SearchIcon />}
                                aria-label="Search"
                            />
                        </InputRightElement>
                    </InputGroup>
                </Box>
            </Flex>
        </Box>
    );
}

export default NavBar;

