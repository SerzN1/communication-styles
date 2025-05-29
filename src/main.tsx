import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/communication-styles">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
