import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserRegistration from './pages/UserRegistration';
import ConfirmationEmail from './pages/ConfirmationEmail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PlanConfirmation from './pages/PlanConfirmation';
import PlanComparison from './pages/PlanComparison';
import RescueLocatorExplanation from './pages/RescueLocatorExplanation';
import InstructionManual from './pages/InstructionManual';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/plan-confirmation" element={<PlanConfirmation />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/confirmation-email" element={<ConfirmationEmail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/plan-comparison" element={<PlanComparison />} />
            <Route path="/rescue-locator-explanation" element={<RescueLocatorExplanation />} />
            <Route path="/instruction-manual" element={<InstructionManual />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;