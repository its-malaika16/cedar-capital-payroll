import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar/navbar.jsx';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Footer from './components/Footer/footer.jsx';
import PrivacyPolicy from './pages/PrivacyPage.jsx';
import CookiePolicy from './pages/CookiePage.jsx';
import TermsPolicy from './pages/TermsPage.jsx';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
         <ScrollToTop />
      { <Navbar /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsPolicy />} />
      </Routes>
       { <Footer /> }
    </Router>
  );
}

export default App;