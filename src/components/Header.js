import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from "react-toastify";

function Header() {
    const { t, i18n } = useTranslation();
    const [isHidden, setIsHidden] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setIsHidden(false);  // Ganz oben => Header komplett einblenden
                setIsAtTop(true);
            } else {
                setIsAtTop(false);

                if (currentScrollY > lastScrollY.current) {
                    setIsHidden(true); // Runter scrollen => Header ausblenden
                }
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <header className={`${isHidden ? 'hidden' : ''} ${!isAtTop ? 'scrolled' : ''}`}>
            <h2 className="header-title">Zelkulon</h2>
            <nav>
                <Link to="/" className="nav-link">{t('header.home')}</Link>
                <Link to="/Portfolio" className="nav-link">{t('header.portfolio')}</Link>
                <Link to='/Pricing' className='nav-link'>{t('header.pricing')}</Link>
                <Link to="/Contact" className="nav-link">{t('header.contact')}</Link>
                <Link to="/About" className='nav-link'>{t('header.about')}</Link>
                <Link to="/DataProtection" className="nav-link">{t("header.data_protection")}</Link>
                {/*<Link to="/Dashboard" className="nav-link">{t("header.dashboard")}</Link>*/}
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
