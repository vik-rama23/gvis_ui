import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/header/Header';
import Downloads from './components/downloads/Downloads';
import LandingPage from './components/LandingPage';
// Import other components as needed

const App = () => {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage/>} />
          {/*<Route path="/academic" element={<Academic />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/downloads" element={<Downloads />} />
        {/* <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} /> */}
         {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;