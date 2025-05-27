import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';

const navLinks = [
  { to: '/', label: 'Home', isVisible: () => true },
  { to: '/quiz', label: 'Quiz', isVisible: () => true },
  { to: '/results', label: 'My Results', isVisible: () => !!localStorage.getItem('quizResults') },
];

function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (target) => {
    setPage(target);
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <NavBar onNavigate={handleNavigate} currentPage={page} />
      <main className="flex-1">
        {page === 'home' && <LandingPage onNavigate={handleNavigate} />}
        {page === 'quiz' && <QuizPage onNavigate={handleNavigate} />}
        {page === 'results' && <ResultsPage onNavigate={handleNavigate} />}
        {page === 'about' && <AboutPage onNavigate={handleNavigate} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
