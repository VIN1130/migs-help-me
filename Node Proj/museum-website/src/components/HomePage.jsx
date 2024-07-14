import React, { useReducer, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import homePageReducer from '../reducers/homepagereducer';
import { Box, Heading, Image, Input, Textarea, Button, Flex } from '@chakra-ui/react';

function HomePage() {
    const initialState = {
        topArtifacts: [],
        artifacts: [],
        form: { name: '', phone: '', email: '', message: '' },
    };

    const [state, dispatch] = useReducer(homePageReducer, initialState);

    useEffect(() => {
        // Fetch top artifacts and artifacts
        fetch('/api/top-artifacts')
            .then(response => response.json())
            .then(data => dispatch({ type: 'SET_TOP_ARTIFACTS', payload: data }));

        fetch('/api/artifacts')
            .then(response => response.json())
            .then(data => dispatch({ type: 'SET_ARTIFACTS', payload: data }));
    }, []);

    const handleFormChange = (e) => {
        dispatch({
            type: 'UPDATE_FORM',
            payload: { [e.target.name]: e.target.value },
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div>
            <NavBar />
            <Box p={4}>
                <Heading as="h2" size="lg">Top Artifacts</Heading>
                <Flex>
                    {state.topArtifacts.map(artifact => (
                        <Box key={artifact.id} p={2}>
                            <Heading as="h3" size="md">{artifact.name}</Heading>
                            <Image src={artifact.image} alt={artifact.name} />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box p={4}>
                <Heading as="h2" size="lg">About the Museum</Heading>
                <p>Lorem ipsum...</p>
            </Box>
            <Box p={4}>
                <Heading as="h2" size="lg">Artifacts</Heading>
                <Flex wrap="wrap">
                    {state.artifacts.map(artifact => (
                        <Box key={artifact.id} p={2}>
                            <Heading as="h3" size="md">{artifact.name}</Heading>
                            <Image src={artifact.image} alt={artifact.name} />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box p={4}>
                <Heading as="h2" size="lg">Contact Us</Heading>
                <form onSubmit={handleFormSubmit}>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={state.form.name}
                        onChange={handleFormChange}
                        mb={2}
                    />
                    <Input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        value={state.form.phone}
                        onChange={handleFormChange}
                        mb={2}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={state.form.email}
                        onChange={handleFormChange}
                        mb={2}
                    />
                    <Textarea
                        name="message"
                        placeholder="Message"
                        value={state.form.message}
                        onChange={handleFormChange}
                        mb={2}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Box>
            <Footer />
        </div>
    );
}

export default HomePage;
