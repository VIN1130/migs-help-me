import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import artifactDetailReducer from '../reducers/artifactdetailreducer';
import { Box, Heading, Image, Flex } from '@chakra-ui/react';

function ArtifactDetail() {
    const { id } = useParams();
    const initialState = { artifact: {}, artifacts: [] };

    const [state, dispatch] = useReducer(artifactDetailReducer, initialState);

    useEffect(() => {
        fetch(`/api/artifact/${id}`)
            .then(response => response.json())
            .then(data => dispatch({ type: 'SET_ARTIFACT', payload: data }));

        fetch('/api/artifacts')
            .then(response => response.json())
            .then(data => dispatch({ type: 'SET_ARTIFACTS', payload: data }));
    }, [id]);

    return (
        <div>
            <NavBar />
            <Box p={4}>
                <Image src={state.artifact.image} alt={state.artifact.name} />
                <Heading as="h2" size="lg">{state.artifact.name}</Heading>
                <p>{state.artifact.description}</p>
            </Box>
            <Box p={4}>
                <Heading as="h3" size="lg">Other Artifacts</Heading>
                <Flex wrap="wrap">
                    {state.artifacts.map(artifact => (
                        <Box key={artifact.id} p={2}>
                            <Heading as="h4" size="md">{artifact.name}</Heading>
                            <Image src={artifact.image} alt={artifact.name} />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Footer />
        </div>
    );
}

export default ArtifactDetail;
