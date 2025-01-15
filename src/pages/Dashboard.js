import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


function Dashboard() {
    const { t } = useTranslation();

    const contentStyle = {
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'justify',
        lineHeight: '1.6',
        padding: '1rem',
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    };

    return (
        <section id="data_protection" style={{ padding: '2rem', textAlign: 'center' }}>
            <Helmet>
                <title>{t('data_protection.title')}</title>
                <meta name="description" content={t('home.description')} />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                <h2 style={{ marginBottom: '2rem' }}>{t('imprint.welcome')}</h2>
                <motion.div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <section style={contentStyle}>

                        <section>

                            <h2>Beispiel 1: Custom Android App</h2>
                            <ul>
                                <li><strong>Preis:</strong> 3.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 6 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Native Android-App mit Kotlin.</li>
                                        <li>Features: Fotoaufnahme, Unterschriften-Funktion, Formulare und Integration
                                            mit APIs (z. B. Google Maps, Spotify API).
                                        </li>
                                        <li>Modernes Design basierend auf Material Design Guidelines.</li>
                                        <li>Testing: Unit- und UI-Tests integriert.</li>
                                        <li>Bereitstellung auf dem Google Play Store.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 150 €/Monat.
                                    <ul>
                                        <li>Leistung: Bugfixes, kleinere Updates und Optimierungen (z. B. für neue
                                            Android-Versionen).
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h2>Beispiel 2: IoT-Lösung mit ESP32</h2>
                            <ul>
                                <li><strong>Preis:</strong> 6.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 8 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer IoT-Firmware mit MicroPython auf ESP32.</li>
                                        <li>Integration von InfluxDB für Datenlogging und Grafana zur Visualisierung.
                                        </li>
                                        <li>Telegram-Bot für Benachrichtigungen und Steuerung.</li>
                                        <li>Dokumentation und Einrichtung der IoT-Plattform.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 250 €/Monat.
                                    <ul>
                                        <li>Leistung: Firmware-Updates, Cloud-Optimierungen, Support für neue Sensoren
                                            oder Geräte.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 3: Spring-Boot-Microservices</h2>
                            <ul>
                                <li><strong>Preis:</strong> 5.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 5 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung von Microservices mit Spring Boot.</li>
                                        <li>Features: Service Discovery (Netflix Eureka), Authentifizierungsservice,
                                            Load Balancing (Ribbon), Datenbankintegration (PostgreSQL) und Suchfunktion
                                            (Elasticsearch).
                                        </li>
                                        <li>Bereitstellung als Docker-Container.</li>
                                        <li>Dokumentation der APIs mit Swagger.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 200 €/Monat.
                                    <ul>
                                        <li>Leistung: Sicherheitsupdates, Optimierungen und Monitoring.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 4: Mediathek-App (Cross-Platform)</h2>
                            <ul>
                                <li><strong>Preis:</strong> 4.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 6 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer plattformübergreifenden Mediathek-App mit SwiftUI (für
                                            iOS) oder Kotlin Multiplatform.
                                        </li>
                                        <li>Features: Medienanzeige, Filter- und Suchfunktion, Integration von
                                            Drittanbieter-APIs.
                                        </li>
                                        <li>Design nach Kundenwunsch.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 180 €/Monat.
                                    <ul>
                                        <li>Leistung: Updates, Bugfixes und kleinere Funktionsanpassungen.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 5: Daten-Dashboards und Monitoring</h2>
                            <ul>
                                <li><strong>Preis:</strong> 4.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 4 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Erstellung eines Dashboards mit Grafana.</li>
                                        <li>Integration von InfluxDB oder anderen Zeitreihendatenbanken.</li>
                                        <li>Echtzeit-Visualisierung und Alerts.</li>
                                        <li>Schulungsmaterialien für Endnutzer.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 200 €/Monat.
                                    <ul>
                                        <li>Leistung: Anpassungen, neue Widgets und Datenquellen.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 6: Testautomatisierung</h2>
                            <ul>
                                <li><strong>Preis:</strong> 3.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 3 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Einrichtung von Testframeworks (z. B. Microfocus UFT, Selenium).</li>
                                        <li>Erstellung von automatisierten Tests für Web- oder mobile Anwendungen.</li>
                                        <li>Integration mit CI/CD-Pipelines (z. B. GitLab CI/CD).</li>
                                        <li>Dokumentation und Übergabe der Testumgebung.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 150 €/Monat.
                                    <ul>
                                        <li>Leistung: Anpassung der Tests an neue Anforderungen und Fehlerbehebung.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>Beispiel 7: Web-App mit React und Node.js</h2>
                            <ul>
                                <li><strong>Preis:</strong> 5.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 6 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer modernen Web-App mit React (Frontend) und Node.js
                                            (Backend).
                                        </li>
                                        <li>Features: Benutzerregistrierung, API-Integration, dynamische Inhalte.</li>
                                        <li>Deployment auf Cloud-Services (z. B. AWS, Heroku).</li>
                                        <li>Responsive Design für Mobilgeräte.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 200 €/Monat.
                                    <ul>
                                        <li>Leistung: Sicherheitsupdates, Optimierungen, kleine
                                            Funktionserweiterungen.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 8: Freelancer-Paket für kleinere Projekte</h2>
                            <ul>
                                <li><strong>Preis:</strong> 1.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 2 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung kleiner Tools oder Automatisierungen (z. B. Skripte,
                                            Batch-Programme, einfache Bots).
                                        </li>
                                        <li>Integration mit bestehenden Anwendungen (z. B. Excel, Telegram, APIs).</li>
                                        <li>Dokumentation und Übergabe.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 100 €/Monat.
                                    <ul>
                                        <li>Leistung: Kleinere Anpassungen und Updates.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 9: API-Entwicklung</h2>
                            <ul>
                                <li><strong>Preis:</strong> 3.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 2 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer RESTful API oder GraphQL API.</li>
                                        <li>Dokumentation mit Swagger oder OpenAPI.</li>
                                        <li>Authentifizierung: Token-basiert (z. B. JWT).</li>
                                        <li>Unterstützung für bis zu 5 Endpunkte.</li>
                                        <li>Deployment als Docker-Container oder auf Cloud-Plattformen (z. B. AWS,
                                            GCP).
                                        </li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 150 €/Monat.
                                    <ul>
                                        <li>Leistung: Monitoring, Anpassung von Endpunkten, Sicherheitsupdates.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 10: Spiele-App</h2>
                            <ul>
                                <li><strong>Preis:</strong> 10.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 12 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung eines 2D-Spiels mit Godot Engine oder Unity.</li>
                                        <li>Features: Leaderboards, In-App-Käufe, Werbeintegration.</li>
                                        <li>Plattformen: iOS und Android.</li>
                                        <li>Testing: QA und Usability-Tests.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 400 €/Monat.
                                    <ul>
                                        <li>Leistung: Bugfixes, Updates, Event-Aktionen (z. B. für Feiertage).</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 11: E-Commerce-Plattform</h2>
                            <ul>
                                <li><strong>Preis:</strong> 7.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 6–8 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer vollständigen E-Commerce-Lösung.</li>
                                        <li>Features: Produktkatalog, Warenkorb, Zahlungsintegration (z. B. PayPal,
                                            Stripe), Benutzerverwaltung.
                                        </li>
                                        <li>CMS: Shopify, WooCommerce oder maßgeschneiderte Lösung.</li>
                                        <li>SEO und Analytics: On-Page SEO, Conversion-Tracking.</li>
                                        <li>Sicherheitsmaßnahmen: HTTPS, DSGVO-konforme Datenverarbeitung.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 250 €/Monat.
                                    <ul>
                                        <li>Leistung: Sicherheitsupdates, Zahlungsintegration-Wartung, Bugfixes, bis zu
                                            5 Content- oder Produktaktualisierungen/Monat.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 13: Chatbot-Entwicklung</h2>
                            <ul>
                                <li><strong>Preis:</strong> 5.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 5 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung eines KI-Chatbots mit Dialogflow oder Rasa.</li>
                                        <li>Funktionen: Intent- und Entities-Erkennung, Text-to-Speech.</li>
                                        <li>Integration in WhatsApp, Telegram oder Web.</li>
                                        <li>Schulung des Modells mit bis zu 50 Beispieldialogen.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 200 €/Monat.
                                    <ul>
                                        <li>Leistung: Modell-Updates, Erweiterung von Intents, Bugfixes.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 14: Desktop-Anwendung</h2>
                            <ul>
                                <li><strong>Preis:</strong> 4.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 5 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung einer plattformübergreifenden Anwendung (Windows, macOS, Linux)
                                            mit Electron.js oder JavaFX.
                                        </li>
                                        <li>Funktionen: Benutzeroberfläche, Datenverarbeitung, Berichte (PDF/CSV).</li>
                                        <li>Integration mit Datenbanken (SQLite, PostgreSQL).</li>
                                        <li>Bereitstellung von Installationspaketen.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 200 €/Monat.
                                    <ul>
                                        <li>Leistung: Updates, Bugfixes, Datenbank-Wartung.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 15: Dashboard-Entwicklung</h2>
                            <ul>
                                <li><strong>Preis:</strong> 5.000 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 4 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung eines Daten-Dashboards mit Grafana, Tableau oder einer
                                            individuellen Weblösung.
                                        </li>
                                        <li>Integration mit Datenquellen (z. B. PostgreSQL, InfluxDB, APIs).</li>
                                        <li>Echtzeit-Visualisierung und Alerts.</li>
                                        <li>Benutzerverwaltung und konfigurierbare Widgets.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 250 €/Monat.
                                    <ul>
                                        <li>Leistung: Datenquellen-Updates, Dashboard-Optimierung, neue Widgets.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Beispiel 16: Freelancer-Paket für kleinere Projekte</h2>
                            <ul>
                                <li><strong>Preis:</strong> 1.500 € einmalig.</li>
                                <li><strong>Lieferzeit:</strong> 2 Wochen.</li>
                                <li><strong>Inklusive:</strong>
                                    <ul>
                                        <li>Entwicklung kleiner Tools oder Automatisierungen (z. B. Skripte,
                                            Batch-Programme, einfache Bots).
                                        </li>
                                        <li>Integration mit bestehenden Anwendungen (z. B. Excel, Telegram, APIs).</li>
                                        <li>Dokumentation und Übergabe.</li>
                                    </ul>
                                </li>
                                <li><strong>Wartung:</strong> 100 €/Monat.
                                    <ul>
                                        <li>Leistung: Kleinere Anpassungen und Updates.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>


                    </section>


                </motion.div>
            </motion.div>
        </section>
    );
}

export default Dashboard;
