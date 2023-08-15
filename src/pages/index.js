import React, { useEffect } from 'react';
import Header from '../components/header';
import Section from '../components/section';
import Footer from '../components/footer';
import Slogan from '../components/slogan';
import * as styles from '../components/index.module.css'

const IndexPage = ({data}) => {


    useEffect(() => {
        const handleParallax = () => {
            const scrolled = window.scrollY;

            const speed = 0.6;

            const offset = scrolled * speed;
            const parallaxContainer = document.getElementById(styles.parallaxContainer);
            parallaxContainer.style.backgroundImage = `linear-gradient(${135 + offset}deg, rgba(163,197,32, 0.9), rgba(106,142,21, 0.9), rgba(163,197,32, 0.9))`;
        };

        window.addEventListener('scroll', handleParallax);
        return () => {
            window.removeEventListener('scroll', handleParallax);
        }

    }, []);



    return (
        <div id={styles.parallaxContainer} >
            <div style={{ color: `#a3c520` }}>
                <Header  style={{ backgroundColor: `#a3c520`, color: `white` }} />
                <Slogan />
                <Section />
                <Footer style={{ backgroundColor: `#333`, color: `#a3c520` }} />
            </div>
        </div>
    );

}

export default IndexPage;
