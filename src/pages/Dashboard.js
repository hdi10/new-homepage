import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const examples = [
    {
        title: 'Custom Android App',
        price: '3.500 €',
        delivery: '6 Wochen',
        details: [
            'Native Android-App mit Kotlin',
            'Features: Fotoaufnahme, Unterschriften-Funktion, Formulare, API-Integration (z. B. Google Maps, Spotify)',
            'Modernes Design (Material Design Guidelines)',
            'Unit- und UI-Tests',
            'Bereitstellung auf Google Play',
        ],
        maintenance: { price: '150 €/Monat', details: 'Bugfixes, kleinere Updates' },
    },
    {
        title: 'IoT-Lösung mit ESP32',
        price: '6.000 €',
        delivery: '8 Wochen',
        details: [
            'Firmware mit MicroPython',
            'Integration InfluxDB, Grafana',
            'Telegram-Bot für Steuerung',
            'IoT-Plattform Dokumentation',
        ],
        maintenance: { price: '250 €/Monat', details: 'Firmware-Updates, Optimierungen' },
    },
    // Weitere Beispiele hier einfügen (für bessere Übersichtlichkeit)
];

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <section className="p-8">
            <Helmet>
                <title>{t('data_protection.title')}</title>
                <meta name="description" content={t('home.description')} />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="container mx-auto"
            >
                <h2 className="text-3xl font-semibold text-center mb-8">
                    {t('imprint.welcome')}
                </h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4">{example.title}</h3>
                            <p><strong>Preis:</strong> {example.price}</p>
                            <p><strong>Lieferzeit:</strong> {example.delivery}</p>
                            <ul className="list-disc list-inside mt-4 text-sm">
                                {example.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <strong>Wartung:</strong> {example.maintenance.price}
                                <p className="text-sm">{example.maintenance.details}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Dashboard;
