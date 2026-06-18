import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar/navbar.jsx';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';


function App() {
  return (
    <Router>
      { <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;