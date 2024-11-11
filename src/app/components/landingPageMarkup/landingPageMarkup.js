import styles from './landingPageMarkup.module.css';
//
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';

export default function LandingPageMarkup({category, side}) {

    useEffect(() => {
        Aos.init();
    }, [])

    return(
        <div className={classNames({[styles.background]:true, [styles.left]:side === 'left', [styles.right]:side === 'right'})} data-aos='fade-right'>
            <p className={styles.paragraph}>{category}</p>    
        </div>
    )
}