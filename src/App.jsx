import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Donors from './components/Donors';
import BloodBanks from './components/BloodBanks';
import Hospitals from './components/Hospitals';
import Request from './components/Request';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './App.css';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <MainContent />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/blood-banks" element={<BloodBanks />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/request" element={<Request />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
