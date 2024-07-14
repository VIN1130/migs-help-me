import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArtifactDetail from './components/ArtifactDetail';
import BookingTicket from './components/BookingTicket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artifact/:id" element={<ArtifactDetail />} />
        <Route path="/booking" element={<BookingTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
