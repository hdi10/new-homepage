import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ background: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
            <h1>Welcome to My Portfolio</h1>
            <nav>
                <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>Home</Link>
                <Link to="/portfolio" style={{ margin: '0 10px', color: '#fff' }}>Portfolio</Link>
                <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>Contact</Link>
                <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>About</Link>
            </nav>
        </header>
    );
}

export default Header;
