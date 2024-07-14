import React, { useReducer, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import homePageReducer from '../reducers/homepagereducer';

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
            <section>
                <h2>Top Artifacts</h2>
                <div>
                    {state.topArtifacts.map(artifact => (
                        <div key={artifact.id}>
                            <h3>{artifact.name}</h3>
                            <img src={artifact.image} alt={artifact.name} />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>About the Museum</h2>
                <p>Lorem ipsum...</p>
            </section>
            <section>
                <h2>Artifacts</h2>
                <div>
                    {state.artifacts.map(artifact => (
                        <div key={artifact.id}>
                            <h3>{artifact.name}</h3>
                            <img src={artifact.image} alt={artifact.name} />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>Contact Us</h2>
                <form onSubmit={handleFormSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={state.form.name}
                        onChange={handleFormChange}
                    />
                    <input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        value={state.form.phone}
                        onChange={handleFormChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={state.form.email}
                        onChange={handleFormChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={state.form.message}
                        onChange={handleFormChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default HomePage;
