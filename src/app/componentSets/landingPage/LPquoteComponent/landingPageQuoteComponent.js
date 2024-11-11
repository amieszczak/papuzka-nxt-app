'use client';
import styles from './landingPageQuote.module.css';
import Image from 'next/image';
import classNames from 'classnames';
//
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function LandingPageQuoteComponent({classes}) {

    useEffect(() => {
        Aos.init();
      }, [])

    return(
        <div className={styles.container} data-aos='fade-left'>
            <div className={styles.quote}>
                <h2 className={classes.headingPrimary}>Sposób, w jaki mówimy do naszych dzieci, staje się ich wewnętrznym głosem. </h2>
                <p>Peggy O Mara</p>
            </div>
            <div className={styles.parrot}>
                <Image src='/landingPage/parrot.svg' width={690} height={542}/>
            </div>
            <div className={styles.bottomLine}></div>
        </div>
    )
}