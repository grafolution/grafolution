import * as React from "react"
import { Link } from "gatsby"
import * as styles from './header.module.css';

const Header = () => (

    <header className={styles.header}>
        <h1>Grafolution</h1>
        <nav className={styles.nav}>
            {/* Link zu den Abschnitten Ihrer One-Page-Seite */}
            <Link to="#section1">Section 1</Link>
            <Link to="#section2">Section 2</Link>
            <Link to="#section3">Section 3</Link>
        </nav>
    </header>
);

export default Header;

