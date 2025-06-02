import GDPRNotice from './components/GDPRNotice';
import type { FunctionComponent } from 'preact';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import AssessmentPage from './pages/AssessmentPage';
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';

import './App.css';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <div className="bg-gray-50 font-sans">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <GDPRNotice />
      </div>
    </BrowserRouter>
  );
};

export default App;
