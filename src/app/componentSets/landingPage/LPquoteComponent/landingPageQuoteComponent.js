'use client';
import styles from './landingPageQuote.module.css';
import Image from 'next/image';
//
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

export default function LandingPageQuoteComponent() {

    useEffect(() => {
        Aos.init();
      }, [])

    return(
        <div className={styles.container}>
            <div className={styles.quote}>
                <h2>„Sposób, w jaki mówimy do naszych dzieci, staje się ich wewnętrznym głosem.” </h2>
                <p>~Peggy O'Mara</p>
            </div>
            <div className={styles.parrot}>
                <Image src='/landingPage/parrot.svg' width={690} height={542}/>
            </div>
            <div className={styles.bottomLine}></div>
        </div>
    )
}