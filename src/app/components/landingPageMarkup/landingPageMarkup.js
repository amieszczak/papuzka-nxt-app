import styles from './landingPageMarkup.module.css';
//
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function LandingPageMarkup({category}) {

    useEffect(() => {
        Aos.init();
    }, [])

    return(
        <div className={styles.background} data-aos='fade-right'>
            <p>{category}</p>    
        </div>
    )
}