import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {toast} from "react-toastify";

// Importiere das Bild
// import japaneseMatrix from '../assets/japaneseMatrix.jpeg';

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
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsHidden(true); // Header verstecken, wenn nach unten gescrollt wird
            } else {
                setIsHidden(false); // Header anzeigen, wenn nach oben gescrollt wird
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

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
            className={isHidden ? 'hidden' : ''}
            style={{
                // background: `url(${japaneseMatrix}) center/cover no-repeat`,
                backgroundColor: '#A67B5B',
                color: '#fff',
                padding: '1rem',
                textAlign: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease-in-out',
            }}
        >
          <h2 className="header-title">Zelkulon</h2>
            <nav>
                <Link to="/" style={{ margin: '0 10px', color: '#fff' }}>{t('header.home')}</Link>
                <Link to="/Portfolio" style={{ margin: '0 10px', color: '#fff' }}>{t('header.portfolio')}</Link>
                <Link to="/Contact" style={{ margin: '0 10px', color: '#fff' }}>{t('header.contact')}</Link>
                <Link to="/About" style={{ margin: '0 10px', color: '#fff' }}>{t('header.about')}</Link>
                <Link to="/DataProtection" style={{ margin: "0 10px", color: '#fff' }}>{t("header.data_protection")}</Link>
                <Link to="/Dashboard" style={{ margin: '0 10px', color: '#fff' }}>{t("header.dashboard")}</Link>
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
