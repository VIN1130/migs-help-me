import React, { useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import artifactDetailReducer from '../reducers/artifactdetailreducer';

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
            <div>
                <img src={state.artifact.image} alt={state.artifact.name} />
                <h2>{state.artifact.name}</h2>
                <p>{state.artifact.description}</p>
            </div>
            <div>
                <h3>Other Artifacts</h3>
                {state.artifacts.map(artifact => (
                    <div key={artifact.id}>
                        <h4>{artifact.name}</h4>
                        <img src={artifact.image} alt={artifact.name} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ArtifactDetail;
