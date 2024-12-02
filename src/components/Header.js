import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {toast} from "react-toastify";
// Importiere das Bild
import japaneseMatrix from '../assets/japaneseMatrix.jpeg';

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function Header() {
    const { t, i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang)
            .then(() => {
                toast.success(`Language changed to ${lang.toUpperCase()}!`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                toast.error('Error changing language', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.error(error);
            });
    };

    return (
        <header
            style={{
                background: `url(${japaneseMatrix}) center/cover no-repeat`,
                color: '#fff',
                padding: '1rem',
                textAlign: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <h1 className="header-title">Zelkulon</h1>
            <nav>
                <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>{t('header.home')}</Link>
                <Link to="/portfolio" style={{ margin: '0 10px', color: '#fff' }}>{t('header.portfolio')}</Link>
                <Link to="/contact" style={{ margin: '0 10px', color: '#fff' }}>{t('header.contact')}</Link>
                <Link to="/about" style={{ margin: '0 10px', color: '#fff' }}>{t('header.about')}</Link>
                <Link to="/data_protection" style={{ margin: "0 10px", color: '#fff' }}>{t("header.data_protection")}</Link>
            </nav>
            <div className="language-switcher">
                <button onClick={() => switchLanguage('en')}>EN</button>
                <button onClick={() => switchLanguage('de')}>DE</button>
                <button onClick={() => switchLanguage('tr')}>TR</button>
            </div>
        </header>
    );
}

export default Header;