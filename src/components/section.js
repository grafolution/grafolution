import React from 'react';
import * as styles from './section.module.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { useTranslation } from 'react-i18next';

const Section = () => {
    const { t } = useTranslation();

    return (

        <div>


            <section id="section2" className={styles.section}>
                Grafolution ist ihr für moderne Webentwicklung und individuelle Softwarelösungen. Starkes und gutes vernetztes Wissen über verschiedenste Sparten und Projekte hinweg ermöglichen es uns Ihr Softwareprojekt bestmögloich umzusetzen.

                Wir sind fokussiert auf die Erstellung maßgeschneiderter Anwendungen, die genau auf Ihre Bedürfnisse zugeschnitten sind. Mit einem tiefen Verständnis für Frameworks und Technologien wie Angular, Java und C# setzen wir Ihr Projekt von der Idee bis zur Umsetzung um. Egal, ob Sie eine dynamische Webanwendung oder eine robuste Softwarelösung benötigen, wir haben das Know-how, um Ihre Vision zum Leben zu erwecken.

                Bei Grafolution setzen wir nicht nur auf technische Fertigkeiten. Wir sind fest davon überzeugt, dass der Schlüssel zu großartigen Softwarelösungen in der Zusammenarbeit liegt. Von der ersten Beratung bis zur finalen Implementierung – wir stehen Ihnen in jedem Schritt des Weges zur Seite, um sicherzustellen, dass das Endprodukt nicht nur funktional, sondern auch zukunftssicher ist.

                Machen Sie den nächsten Schritt in Ihrer digitalen Transformation. Lassen Sie uns gemeinsam etwas Großartiges schaffen.

            </section>



            <section id="section1" className={styles.section}>
                <h2>Bildungsreise</h2>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Jan. 2020–Juli 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3>Fachhochschule Oberösterreich</h3>
                        <p>Bachelor's degree in Computer Software Engineering</p>
                        <p>Schwerpunkte: Algorithmen, Computernetzwerke und Programmierframeworks.</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2014–2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3>HTBLuVA St. Pölten</h3>
                        <p>Matura in Informatik</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

                <h2>Fähigkeitenbaum</h2>
                <div className={styles.tree}>
                    <div className={styles.node}>Grundfähigkeiten</div>
                    <div className={styles.branch}>
                        <div className={styles.node}>Java</div>
                        <div className={styles.node}>.NET</div>
                    </div>
                </div>
            </section>

            <section id="section3" className={styles.section}>
                <div>
                    <h2>{t('contactPage.title')}</h2>
                    <p>{t('contactPage.description')}</p>

                    <form>
                        <label>
                            {t('contactPage.name')}:
                            <input type="text" name="name" />
                        </label>
                        <br />

                        <label>
                            {t('contactPage.email')}:
                            <input type="email" name="email" />
                        </label>
                        <br />

                        <label>
                            {t('contactPage.message')}:
                            <textarea name="message"></textarea>
                        </label>
                        <br />

                        <button type="submit">{t('contactPage.submitButton')}</button>
                    </form>
                </div>
            </section>


        </div>
    )
};
export default Section;
