import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtifactDetail from './pages/ArtifactDetail';
import BookingTicket from './pages/BookingTicket';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMuseum from './components/DetailMuseum';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutMuseum />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/artifact/:id" element={<ArtifactDetail />} />
        <Route path="/booking" element={<BookingTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
