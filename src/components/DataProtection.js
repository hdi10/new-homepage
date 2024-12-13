import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


function DataProtection() {
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
                        <header style={contentStyle}>
                            <h1>{t('imprint.contact.name')}</h1>
                        </header>
                        <address>
                            <p>{t('imprint.contact.address')}</p>
                            <p>{t('imprint.contact.phone')}</p>
                            <p>
                                <a href={`mailto:${t('imprint.contact.email')}`}>
                                    {t('imprint.contact.email')}
                                </a>
                            </p>
                            <p>
                                <a href={t('imprint.contact.website')}>
                                    {t('imprint.contact.website')}
                                </a>
                            </p>
                        </address>
                        <section>
                            <h3>{t('imprint.legal_information.tax_id')}</h3>
                            <h3>{t('imprint.legal_information.commercial_register')}</h3>
                        </section>
                        <section>
                            <h2>{t('imprint.representative')}</h2>
                        </section>
                    </section>
                    <section style={contentStyle}>
                        <header style={contentStyle}>
                            <h1>{t('data_protection.responsible')}</h1>
                        </header>
                        <article>
                            <p>{t('data_protection.data_usage.website_visit')}</p>
                            <p>{t('data_protection.data_usage.contact')}</p>
                            <p>{t('data_protection.data_usage.cookies')}</p>
                            <p>{t('data_protection.rights')}</p>
                        </article>
                    </section>


                    {/*<div style={contentStyle}>
                        <h1>{t('data_protection.blog')}</h1>
                        <p>
                            <h2>Impressum</h2>

                            <h3> Angaben gemäß § 5 TMG:</h3>
                            <address>
                                Written by <a href="mailto:hdastekin@gmail.com">Harun Dastekin</a>.<br/>
                                <h1>Kontaktieren Sie uns:<br/></h1>
                                Zelkulon UG(haftungsbeschränkt)<br/>
                                Wermuthweg 7, 12353
                                Berlin<br/>
                                Deutschland
                            </address>
                            <ul><li>[Umsatzsteuer-Identifikationsnummer gemäß § 27a
                            Umsatzsteuergesetz, falls vorhanden]</li><li>[Handelsregistereintrag, falls zutreffend:
                            Handelsregister, Registernummer]</li></ul>
                        </p>
                        <p>
                            <h3>Vertreten durch:</h3>
                            <h4>Kontakt:</h4>
                            <p>Harun Dastekin</p>
                            <address>
                                Telefon: 0176-22812332<br/>
                                E-Mail: hdastekin@gmail.com<br/>
                                Website: <a href={"https://www.dastekin.de"}>https://www.dastekin.de</a>
                            </address>
                            </p>
                        <p>
                            <div>
                                <h3>Haftungsausschluss (Disclaimer):</h3>

                        <p>
                            <h3>Haftung für Inhalte</h3>
                        </p>
                        <p>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                                Tätigkeit hinweisen.
                        </p>
                        <p>
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                                entfernen.
                        </p>
                        <p>
                            <h3>Haftung für Links</h3>
                        </p>
                        <p>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                                Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                                Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                    <p>
                                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekannt Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

                        <h3>Urheberrecht</h3>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.

                                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

                            <h3>Online-Streitbeilegung</h3>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                                bereit: https://ec.europa.eu/consumers/odr.
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.

                                Hinweis gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz):
                                Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen.

                        </p>
                            </div>

                            </p>
                    </div>
                    <div style={contentStyle}>
                        <p>
                        <h1>{t('data_protection.services')}</h1>
                        <p>
                            <h2> Datenschutz</h2>
                        </p>
                            <p>
                                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen
                                Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die
                                Verarbeitung personenbezogener Daten im Rahmen der Nutzung unserer Website.
                            </p>
                        <div>
                            <h3> Verantwortlicher</h3>

                            Zelkulon UG(haftungsbeschränkt)<br/>
                            Wermuthweg 7<br/>
                            0176-22812332<br/>
                            hdastekin@gmail.com<br/>
                        </div>
                        <p>
                        <h3> Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der
                                    Verwendung </h3>
                        </p>
                        <p>
                        <h3>1. Besuch der Website</h3>

                                    Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
                                    kommenden
                                    Browser automatisch Informationen an den Server unserer Website gesendet. Diese
                                    Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende
                                    Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten
                                    Löschung
                                    gespeichert:
                        </p>
                        <p>
                            <ul>
                                <li>IP-Adresse des anfragenden Rechners,</li>
                                <li>Datum und Uhrzeit des Zugriffs,</li>
                                <li>Name und URL der abgerufenen Datei,</li>
                                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name
                                    Ihres
                                    Access-Providers.</li>
                            </ul>
                        </p>
                        <p>
                            Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                        </p>
                        <p>
                            <ul>
                            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
                            </li>
                            <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                            <li>zu weiteren administrativen Zwecken.</li>
                            </ul>
                        </p>
                        <p>
                                    Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                                    berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung.
                                    In
                                    keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre
                                    Person
                                    zu ziehen.
                        </p>
                        <p>
                        <h3> 2. Kontaktaufnahme</h3>

                                    Wenn Sie uns per E-Mail oder über ein Kontaktformular Anfragen zukommen lassen,
                                    werden
                                    Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der
                                    Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                                    wir
                                    nicht ohne Ihre Einwilligung weiter.

                                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                                    Durchführung
                                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                                    Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf
                                    unseren
                                    berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes
                                    Interesse
                                    an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                        </p>
                        <p>
                                   <h3>3. Verwendung von Cookies</h3>

                                    Unsere Website verwendet Cookies. Hierbei handelt es sich um kleine Dateien, die Ihr
                                    Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie
                                    unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an,
                                    enthalten
                                    keine Viren, Trojaner oder sonstige Schadsoftware.

                                    In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit
                                    dem
                                    spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir
                                    dadurch
                                    unmittelbar Kenntnis von Ihrer Identität erhalten.

                                    Die Verwendung von Cookies dient einerseits dazu, die Nutzung unseres Angebots für
                                    Sie
                                    angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu
                                    erkennen,
                                    dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach
                                    Verlassen unserer Seite automatisch gelöscht.

                                    Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit
                                    temporäre
                                    Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät
                                    gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch
                                    zu
                                    nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben
                                    und
                                    Einstellungen Sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.

                                    Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung
                                    unserer
                                    berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 lit. f DSGVO
                                    erforderlich.

                                    Sie können Ihre Browsereinstellungen so konfigurieren, dass keine Cookies auf Ihrem
                                    Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie
                                    angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen,
                                    dass
                                    Sie nicht alle Funktionen unserer Website nutzen können.
                        </p>
                        <p>
                            <h3> 4. Nutzung von Analyse-Tools</h3>

                                    Wir setzen auf unserer Website Analyse-Tools ein, um die Nutzung unserer Website
                                    statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebots für Sie
                                    auszuwerten. Die Rechtsgrundlage für die Verwendung solcher Analyse-Tools ist Art. 6
                                    Abs. 1 lit. f DSGVO.<br/>

                                    **[Platz für spezifische Tools, wie z. B. Google Analytics, Matomo, etc.]**

                            <h3> Weitergabe von Daten</h3>

                                    Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden
                                    aufgeführten Zwecken findet nicht statt.

                                    Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:

                            <ul>
                                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a
                                    DSGVO),</li>
                                <li>die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder
                                    Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                                    besteht,
                                    dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
                                    Daten
                                    haben,</li>
                                <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine
                                    gesetzliche
                                    Verpflichtung besteht, sowie</li>
                                <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung
                                    von
                                    Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
                            </ul>


                            <h3>Rechte der betroffenen Person</h3>

                                    Sie haben das Recht:
                            <ul>
                                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen
                                    Daten
                                    zu verlangen;</li>
                                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
                                    Vervollständigung
                                    Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
                                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen
                                    Daten
                                    zu verlangen, soweit nicht die Verarbeitung zur Erfüllung einer rechtlichen
                                    Verpflichtung erforderlich ist;</li>
                                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen
                                    Daten
                                    zu verlangen;</li>
                                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt
                                    haben, in
                                    einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die
                                    Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
                                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber
                                    uns zu
                                    widerrufen;</li>
                                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                            </ul>


                            <h4> Aktualität und Änderung dieser Datenschutzerklärung</h4>

                                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Datum].

                                    Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
                                    geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
                                    werden,
                                    diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
                                    jederzeit auf unserer Website von Ihnen abgerufen und ausgedruckt werden.


                                </p>
                        </p>
                    </div>*/}
                </motion.div>
            </motion.div>
        </section>
    );
}

export default DataProtection;
