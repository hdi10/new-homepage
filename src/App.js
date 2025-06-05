import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from "./components/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataProtection from "./pages/DataProtection";
import LoginForm from "./components/LoginForm";

import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Zelkulon</title>
          <meta name="description" content="Softwareentwicklung und Testing." />
          <meta name="keywords" content="Portfolio, Web Development, React, Android, Mobile Apps, Component Based Development" />
          <meta name="author" content="Zelkulon UG(haftungsbeschränkt)" />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path='/Pricing' element={<Pricing/>} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/DataProtection" element={<DataProtection />} />
          <Route path="/auth" element={<LoginForm />} />
          {/*<Route path="/dashboard" element={<Dashboard/>}/>*/}
        </Routes>
        {/* Toast Container für Benachrichtigungen */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
