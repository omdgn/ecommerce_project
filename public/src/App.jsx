import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Footer />
    </Router>
  );
}

export default App;
 