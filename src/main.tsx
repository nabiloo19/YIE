import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeFirebase } from './lib/firebase';

// Initialize Firebase and Analytics
initializeFirebase();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Removed service worker registration for PWA capabilities
