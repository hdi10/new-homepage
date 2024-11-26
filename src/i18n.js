import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Übersetzungsdateien importieren
import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

// Initialisiere i18next
i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
        tr: { translation: tr },
    },
    lng: 'en', // Standardsprache
    fallbackLng: 'en', // Fallback-Sprache
    interpolation: {
        escapeValue: false, // React benötigt kein escaping
    },
});

export default i18n;
