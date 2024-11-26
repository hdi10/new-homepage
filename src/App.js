import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Router>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Portfolio Website</title>
            <meta name="description" content="A personal portfolio showcasing my projects and skills." />
            <meta name="keywords" content="Portfolio, Web Development, React, Mobile Apps" />
            <meta name="author" content="Your Name" />
          </Helmet>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* Toast Container für Benachrichtigungen */}
          <ToastContainer />
        </div>
      </Router>
  );
}

export default App;
