import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import AssessmentPage from './pages/AssessmentPage';
import LandingPage from './pages/LandingPage';
import ResultsPage from './pages/ResultsPage';

import './App.css';

function App() {
  const basename = import.meta.env.BASE_URL || '/communication-styles/';
  return (
    <BrowserRouter basename={basename}>
      <div className="bg-gray-50 font-sans">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
