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
                <h2 style={{ marginBottom: '2rem' }}>{t('data_protection.welcome')}</h2>
                <motion.div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <div style={contentStyle}>
                        <h3>{t('data_protection.blog')}</h3>
                        <p>
                            Impressum

                            Angaben gemäß § 5 TMG:

                            [Zelkulon UG(haftungsbeschränkt)][Wermuthweg 7 12353
                            Berlin][0176-22812332][hdastekin@gmail.com][Umsatzsteuer-Identifikationsnummer gemäß § 27a
                            Umsatzsteuergesetz, falls vorhanden][Handelsregistereintrag, falls zutreffend:
                            Handelsregister, Registernummer]
                        </p>
                        <p>
                                Vertreten durch:

                                [Harun Dastekin]

                                Kontakt:

                                Telefon: [0176-22812332]E-Mail: [hdastekin@gmail.com]Website: [dastekin.de]
                        </p>
                        <p>
                            <div>
                                Haftungsausschluss (Disclaimer):

                        <p>
                                Haftung für Inhalte
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
                                Haftung für Links
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
                                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekannt
                        </p>
                            </div>

                            </p>
                    </div>
                    <div style={contentStyle}>
                        <h3>{t('data_protection.services')}</h3>
                        <p>
                            # Datenschutz
                        </p>
                            <p>
                                Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen
                                Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die
                                Verarbeitung personenbezogener Daten im Rahmen der Nutzung unserer Website.
                            </p>
                                <p>
                                    ## Verantwortlicher

                                    **Zelkulon UG(haftungsbeschränkt)**
                                    Wermuthweg 7
                                    0176-22812332
                                    hdastekin@gmail.com
                                </p>
                        <p>
                                    ## Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der
                                    Verwendung
                        </p>
                        <p>
                                    ### 1. Besuch der Website

                                    Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz
                                    kommenden
                                    Browser automatisch Informationen an den Server unserer Website gesendet. Diese
                                    Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende
                                    Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten
                                    Löschung
                                    gespeichert:
                        </p>
                        <p>
                                    - IP-Adresse des anfragenden Rechners,
                                    - Datum und Uhrzeit des Zugriffs,
                                    - Name und URL der abgerufenen Datei,
                                    - Website, von der aus der Zugriff erfolgt (Referrer-URL),
                                    - verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name
                                    Ihres
                                    Access-Providers.
                        </p>
                        <p>
                                    Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
                        </p>
                        <p>
                                    - Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,
                                    - Gewährleistung einer komfortablen Nutzung unserer Website,
                                    - Auswertung der Systemsicherheit und -stabilität sowie
                                    - zu weiteren administrativen Zwecken.
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
                                    ### 2. Kontaktaufnahme

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
                                    ### 3. Verwendung von Cookies

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
                                    ### 4. Nutzung von Analyse-Tools

                                    Wir setzen auf unserer Website Analyse-Tools ein, um die Nutzung unserer Website
                                    statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebots für Sie
                                    auszuwerten. Die Rechtsgrundlage für die Verwendung solcher Analyse-Tools ist Art. 6
                                    Abs. 1 lit. f DSGVO.

                                    **[Platz für spezifische Tools, wie z. B. Google Analytics, Matomo, etc.]**

                                    ## Weitergabe von Daten

                                    Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden
                                    aufgeführten Zwecken findet nicht statt.

                                    Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:

                                    - Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a
                                    DSGVO),
                                    - die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder
                                    Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                                    besteht,
                                    dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
                                    Daten
                                    haben,
                                    - für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 lit. c DSGVO eine
                                    gesetzliche
                                    Verpflichtung besteht, sowie
                                    - dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO für die Abwicklung
                                    von
                                    Vertragsverhältnissen mit Ihnen erforderlich ist.

                                    ## Rechte der betroffenen Person

                                    Sie haben das Recht:

                                    - gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen
                                    Daten
                                    zu verlangen;
                                    - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
                                    Vervollständigung
                                    Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
                                    - gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen
                                    Daten
                                    zu verlangen, soweit nicht die Verarbeitung zur Erfüllung einer rechtlichen
                                    Verpflichtung erforderlich ist;
                                    - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen
                                    Daten
                                    zu verlangen;
                                    - gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt
                                    haben, in
                                    einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die
                                    Übermittlung an einen anderen Verantwortlichen zu verlangen;
                                    - gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber
                                    uns zu
                                    widerrufen;
                                    - gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.

                                    ## Aktualität und Änderung dieser Datenschutzerklärung

                                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Datum].

                                    Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
                                    geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
                                    werden,
                                    diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
                                    jederzeit auf unserer Website von Ihnen abgerufen und ausgedruckt werden.


                                </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default DataProtection;
