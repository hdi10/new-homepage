import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n'; // Importiere i18n, um es global zu aktivieren

AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

