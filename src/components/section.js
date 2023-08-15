import React from 'react';
import * as styles from './section.module.css';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Section = () => (


        <div>


            <section id="section2" className={styles.section}>
                {/* Inhalt für Abschnitt 2 */}
                test
            </section>

            <section id="section3" className={styles.section}>
                {/* Inhalt für Abschnitt 3 */}
                test
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
        </div>
    );

export default Section;
