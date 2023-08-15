import * as React from "react"
import { Link } from "gatsby"
import * as styles from './header.module.css';
import '../i18n';  // Importieren Sie die i18n-Konfiguration
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className={styles.header}>
            <h1>{t('welcome')}</h1>
            <nav className={styles.nav}>
                <Link to="#dienstleistungen">Dienstleistungen</Link>
                <Link to="#projekte">Projekte</Link>
                <Link to="#ueber-uns">Über uns</Link>
                <Link to="#kontakt">Kontakt</Link>

                <select
                    className={styles.languageSelector}
                    value={i18n.language}
                    onChange={(e) => changeLanguage(e.target.value)}
                >
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                </select>
            </nav>
        </header>
    );

};

export default Header;

