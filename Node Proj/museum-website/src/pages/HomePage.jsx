import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutMuseum from '../components/DetailMuseum'; // Import AboutMuseum component
import ControlledCarousel from '../components/TopArtifacts';
import { Container } from 'react-bootstrap'; // Import Container from react-bootstrap

function HomePage() {
    return (
        <div>
            <NavBar />
            <Container fluid style={{ padding: '70px' }}>
                <section style={{ marginTop: '40px' }}>
                    <h2>Top Artifacts</h2>
                    <ControlledCarousel />
                </section>
                <section>
                    <h2>Artifacts</h2>
                    {/* Artifacts content */}
                </section>
            </Container>
            <Footer />
        </div>
    );
}

export default HomePage;
